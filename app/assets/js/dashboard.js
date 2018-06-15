$(document).ready(function() {


$("#view").on("click", function(event) {
    event.preventDefault();
    $("#character.container").empty();
    $.get("/api/characters", function(data) {
        console.log(data);
        if (data.length !== 0) {
      
          for (var i = 0; i < data.length; i++) {
            var strength;
            var dexterity;
            var constitution;
            var intelligence;
            var wisdom;
            var charisma;
            var race = data[i].race;
            var charClass = data[i].class;
            var initialstrength = data[i].strength;
            var initialdexterity = data[i].dexterity;
            var initialconstitution = data[i].constitution;
            var initialintelligence = data[i].intelligence;
            var initialwisdom = data[i].wisdom;
            var initialcharisma = data[i].charisma;
            var speed;

            switch(race){
                case "Human": 
                strength = initialstrength + 1;
                dexterity = initialdexterity +1;
                constitution = initialconstitution + 1;
                intelligence = initialintelligence +1;
                wisdom = initialwisdom + 1;
                charisma = initialcharisma +1;
                speed = 30;
                break;

                case "Dwarf": 
                strength = initialstrength;
                dexterity = initialdexterity;
                constitution = initialconstitution + 2;
                intelligence = initialintelligence;
                wisdom = initialwisdom;
                charisma = initialcharisma;
                speed = 30;
                break;

                case "Orc": 
                strength = initialstrength + 2;
                dexterity = initialdexterity;
                constitution = initialconstitution + 1;
                intelligence = initialintelligence;
                wisdom = initialwisdom;
                charisma = initialcharisma;
                speed = 30;
                break;

                case "Elf":
                strength = initialstrength;
                dexterity = initialdexterity +2;
                constitution = initialconstitution;
                intelligence = initialintelligence;
                wisdom = initialwisdom;
                charisma = initialcharisma;
                speed= 30;
                break; 

                case "Halfling":
                strength = initialstrength;
                dexterity = initialdexterity +2;
                constitution = initialconstitution;
                intelligence = initialintelligence;
                wisdom = initialwisdom;
                charisma = initialcharisma;
                speed = 25;
                break;               
            }

            var strengthmod;
            var dexmod;
            var constmod;
            var intellmod;
            var wismod;
            var charmod;

            switch(strength){
                case 8: case 9: strengthmod = -1;
                break;
                case 10: case 11: strengthmod = 0;
                break;
                case 12: case 13: strengthmod = 1;
                break;
                case 14: case 15: strengthmod = 2;
                break;
                case 16: case 17: strengthmod = 3;
            }

            switch(dexterity){
                case 8: case 9: dexmod = -1;
                break;
                case 10: case 11: dexmod = 0;
                break;
                case 12: case 13: dexmod = 1;
                break;
                case 14: case 15: dexmod = 2;
                break;
                case 16: case 17: dexmod = 3;
            }

            switch(constitution){
                case 8: case 9: constmod = -1;
                break;
                case 10: case 11: constmod = 0;
                break;
                case 12: case 13: constmod = 1;
                break;
                case 14: case 15: constmod = 2;
                break;
                case 16: case 17: constmod = 3;
            }
            switch(intelligence){
                case 8: case 9: intellmod = -1;
                break;
                case 10: case 11: intellmod = 0;
                break;
                case 12: case 13: intellmod = 1;
                break;
                case 14: case 15: intellmod = 2;
                break;
                case 16: case 17: intellmod = 3;
            }
            switch(wisdom){
                case 8: case 9: wismod = -1;
                break;
                case 10: case 11: wismod = 0;
                break;
                case 12: case 13: wismod = 1;
                break;
                case 14: case 15: wismod = 2;
                break;
                case 16: case 17: wismod = 3;
            }
            switch(charisma){
                case 8: case 9: charmod = -1;
                break;
                case 10: case 11: charmod = 0;
                break;
                case 12: case 13: charmod = 1;
                break;
                case 14: case 15: charmod = 2;
                break;
                case 16: case 17: charmod = 3;
            }

            var strengthThrow;
            var dexThrow; 
            var constThrow;
            var intellThrow;
            var wisThrow;
            var charThrow;
            var hitPoints;
            var hitDice;

            switch(charClass){
                case "Wizard": 
                strengthThrow = strengthmod;
                dexThrow = dexmod;
                constThrow = constmod;
                intellThrow = intellmod + 2;
                wisdomThrow= wismod + 2;
                charThrow = charmod;
                hitPoints = constmod + 6;
                hitDice = "1d6";
                break;

                case "Barbarian": 
                strengthThrow = strengthmod + 2;
                dexThrow = dexmod;
                constThrow = constmod + 2;
                intellThrow = intellmod;
                wisThrow= wismod;
                charThrow = charmod;
                hitPoints = constmod + 12;
                hitDice = "1d12"
                break;

                case "Rogue": 
                strengthThrow = strengthmod;
                dexThrow = dexmod + 2;
                constThrow = constmod;
                intellThrow = intellmod + 2;
                wisdomThrow= wismod;
                charThrow = charmod;
                hitPoints = constmod + 8;
                hitDice = "1d8"
                break;

                case "Cleric": 
                strengthThrow = strengthmod;
                dexThrow = dexmod;
                constThrow = constmod;
                intellThrow = intellmod;
                wisdomThrow= wismod +2;
                charThrow = charmod +2;
                hitPoints= constmod + 8;
                hitDice = "1d8";
                break;

                case "Bard": 
                strengthThrow = strengthmod;
                dexThrow = dexmod + 2;
                constThrow = constmod;
                intellThrow = intellmod;
                wisdomThrow= wismod;
                charThrow = charmod + 2;
                hitPoints = constmod + 8;
                hitDice = "1d8"
                break;
            }



            
      
            var row = $("<div>");
            row.addClass("character");
      
            row.append("<h4>" + data[i].playerName + "'s Character Sheet");
            row.append("<p>Character Name: " + data[i].characterName);
            row.append("<p>" + charClass +" "+ race)
            row.append("<p>Strength: " + strength +" Strength Modifier: " + strengthmod + " Saving Throw: " + strengthThrow);
            row.append("<p>Dexterity: " + dexterity + " Dexterity Modifier: " + dexmod + " Saving Throw: " + dexThrow);
            row.append("<p>Constitution: " + constitution + " Constitution Modifier: " + constmod + " Saving Throw: " + constThrow);
            row.append("<p>Intelligence: " + intelligence + " Intelligence Modifier: " + intellmod + " Saving Throw: " + intellThrow);
            row.append("<p>Wisdom: " + wisdom + " Wisdom Modifier: " + wismod + " Saving Throw: " + wisThrow);
            row.append("<p>Charisma: " + charisma + " Charisma Modifier: " + charmod + " Saving Throw: " + charThrow);
            row.append("<p>Skills: " + data[i].skill1 + " " + data[i].skill2);
            row.append("<p>Backstory: " + data[i].backstory);
            row.append("<p>Initiative: " + (dexmod + 2));
            row.append("<p>Speed: " + speed);
            row.append("<p>Hit Points: " + hitPoints + " Hit dice: " + hitDice)
      
            $("#character-container").prepend(row);
      
          }
      
        }
      
      });
      
    })


});




