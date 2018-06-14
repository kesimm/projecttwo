// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var db = require("../models");


// Routes
// =============================================================
module.exports = function(app) {

  
  app.get("/api/characters", function(req, res) {

   
    db.Character.findAll({}).then(function(results) {
      
      res.json(results);
    });

  });

  // 
  app.post("/api/characters", function(req, res) {

    console.log("Character Data:");
    console.log(req.body);

    db.Character.create({
      playerName: req.body.playerName,
      characterName: req.body.characterName,
      class: req.body.class,
      race: req.body.race,
      background: req.body.background,
      alignment: req.body.alignment,
      backstory: req.body.backstory,
      strength: req.body.strength,
      dexterity: req.body.dexterity,
      constitution: req.body.constitution,
      intelligence: req.body.intelligence,
      wisdom: req.body.wisdom,
      charisma: req.body.charisma,
      proficiencyBonus: req.body.proficiencyBonus,
      skill1: req.body.skill1,
      skill2: req.body.skill2,
      userId: req.user.id

        

    }).then(function(results) {
    
      res.end();
    });

  });

};
