var authController = require('../controllers/authcontroller.js');
 
module.exports = function(app, passport) {

    app.get('/', authController.home);
    app.get('/signup', authController.signup);
    app.get('/signin', authController.signin);
    app.get('/logout',authController.logout);
    app.get('/dashboard',isLoggedIn, authController.dashboard);
    app.get('/new', isLoggedIn, authController.new)

    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/dashboard',
 
        failureRedirect: '/signup'
    }
));

app.post('/signin', passport.authenticate('local-signin', {
    successRedirect: '/dashboard',

    failureRedirect: '/signin'
}

));
 

}
//so it redirects if user tries to go to /dashboard without signing in
function isLoggedIn(req, res, next) {
 
    if (req.isAuthenticated())
     
        return next();
         
    res.redirect('/signin');
 
}

