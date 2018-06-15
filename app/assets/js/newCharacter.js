$("#submitButton").on("click", function(event) {
    event.preventDefault();
    var charClass = $("#class").val();
    var race = $("#race").val();
    var strength= $("#strength").val();
    var dexterity= $("#dexterity").val();
    var constitution= $("#constitution").val();
    var intelligence= $("#intelligence").val();
    var wisdom= $("#wisdom").val();
    var charisma= $("#charisma").val();

    
    var newCharacter = {
        playerName: $("#playerName").val(),
        characterName: $("#characterName").val(),
        class: charClass,
        race: race,
        background: $("#background").val(),
        alignment: $("#alignment").val(),
        backstory: $("#backstory").val(),
        strength: strength,
        dexterity: dexterity,
        constitution: constitution,
        intelligence: intelligence,
        wisdom: wisdom,
        charisma: charisma,
        proficiencyBonus: "2",
        skill1: $("#skill1").val(),
        skill2: $("#skill2").val()
    };
  
    console.log(newCharacter);
  
    // Send an AJAX POST-request with jQuery
    $.post("/api/characters", newCharacter)

    $("#charForm")[0].reset();
}) 