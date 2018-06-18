
module.exports = function(sequelize, DataTypes){
    var Character = sequelize.define("Character",{
        playerName: DataTypes.STRING,
        characterName: DataTypes.STRING,
        class: DataTypes.STRING,
        race: DataTypes.STRING,
        background: DataTypes.STRING,
        alignment: DataTypes.STRING,
        strength: DataTypes.INTEGER,
        dexterity: DataTypes.INTEGER,
        constitution: DataTypes.INTEGER,
        intelligence: DataTypes.INTEGER,
        wisdom: DataTypes.INTEGER,
        charisma: DataTypes.INTEGER,
        proficiencyBonus: DataTypes.INTEGER,
        backstory: DataTypes.STRING,
        skill1: DataTypes.STRING,
        skill2: DataTypes.STRING
    });

     Character.associate = function(models) {
        // Character should belong to a User
        // A Character can't be created without a User due to the foreign key constraint
        Character.belongsTo(models.user, {
          foreignKey: {
              allowNull: false
          }
        });
    };
   return Character; 
};