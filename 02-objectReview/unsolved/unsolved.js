var myCar = {
    type: "beater",
    color: "dirty beige",
    mileage: 176000,
    currentVolume: 8,
    currentlyPlaying: "Ace of Base",
    cdCollection: [
        "MC Hammer", "New Kids on the Block", "Kenny G", "Obnoxious Holiday Music", "Chumbawumba", "They Might Be Giants"
    ],
    honk: function (numTimes) {
        var sound = "Honk! ";
        console.log(sound.repeat(numTimes));
    }

    // Write a method to change CDs -- this should randomly choose
    // a CD from 'cdCollection' and set it to 'currentlyPlaying'.
    // Then test it out a few times to make sure it works!

    // Write a method to add a new CD to 'cdCollection'.

    // Write a method to change 'currentVolume' either up or down...
    // But only allow the user to change the volume no lower than 0 and
    // no higher than 10.

    // Write a method to change 'color' to whatever color the user provides. 

}

// Make the car honk five times. Check out the logic in the 'honk'
// method to ensure you understand how it works!


