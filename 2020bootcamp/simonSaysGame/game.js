var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var gameStarted = false;
var level = 0;

function nextSequence() {
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level: " + level);

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];

    animatePress(randomChosenColour);
    playSound(randomChosenColour);
    gamePattern.push(randomChosenColour);
}

// Button on-click
$(".btn").click(function(){
    var userChosenColour = $(this).attr('id');
    playSound(userChosenColour);
    animatePress(userChosenColour);
    userClickedPattern.push(userChosenColour);

    checkAnswer(userClickedPattern.length - 1);
});


function checkAnswer(currentLevel) {
    console.log("Current Index: " + currentLevel)
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function(){
                nextSequence();
            }, 1000);
        }
    } else {
        $("body").addClass("game-over");
        $("h1").text("Game Over. Press Any Key to Restart");
        playSound("wrong");
        startOver();
        setTimeout(function () {
        $("body").removeClass("game-over");
        }, 200);
        
    }
}

function startOver() {
    gamePattern = [];
    level = 0;
    gameStarted = false;
}

/*

    Functional Functions below, i suppose

*/

// Keyboard detector
$(document).keypress(function (event) {
    if (gameStarted === false) {
        nextSequence();
        gameStarted = true;
    } else {
        console.log("Game has already started");
    }
})

// Button press animation
function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");

    setTimeout(function () {
        $("#" + currentColour).removeClass("pressed");
    }, 100);
}

// Play sound function
function playSound(name) {
    var audio = new Audio("./sounds/" + name + ".mp3");
    audio.play();
}