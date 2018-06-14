var express = require('express');
var app = express();
var passport   = require('passport')
var session    = require('express-session')
var bodyParser = require('body-parser')
var env = require('dotenv').load()
var exphbs = require('express-handlebars')

app.use(express.static("app/assets"));


//For BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// For Passport
app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

//For Handlebars
app.set('views', './app/views')
app.engine('hbs', exphbs({
    extname: '.hbs'
}));
app.set('view engine', '.hbs');


//Models
var models = require("./app/models");

//Sync Database
models.sequelize.sync().then(function() {
 
    console.log('Nice! Database looks fine')
    console.log(models.Character);
 
}).catch(function(err) {
 
    console.log(err, "Something went wrong with the Database Update!")
 
});


//Routes
var authRoute = require('./app/routes/auth.js')(app, passport);
require("./app/routes/character-api-routes.js")(app);
require("./app/routes/user-api-routes.js")(app);
 



//load passport strategies
require('./app/config/passport/passport.js')(passport, models.user);
 
var PORT = process.env.PORT || 3000;
app.listen(PORT, function(err) {
 
    if (!err)
        console.log("Site is live");
    else console.log(err)
 
});