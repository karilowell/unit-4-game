var currentScore;
var randomNumber;
var wins;
var losses;
var crystal1Value;
var crystal2Value;
var crystal3Value;
var crystal4Value;

function reset() {
    // Resets crystal values
    crystal1Value = Math.floor(Math.random() * 12) + 1;

    // Ensures no duplicates
    do {
    crystal2Value = Math.floor(Math.random() * 12) + 1;
    } while (crystal2Value === crystal1Value);

    do {
    crystal3Value = Math.floor(Math.random() * 12) + 1;
    } while (crystal3Value === crystal1Value || crystal3Value === crystal2Value);

    do {
    crystal4Value = Math.floor(Math.random() * 12) + 1;
    } while (crystal4Value === crystal1Value || crystal4Value === crystal2Value || crystal4Value === crystal3Value);

    console.log("Crystal 1: " + crystal1Value);
    console.log("Crystal 2: " + crystal2Value);
    console.log("Crystal 3: " + crystal3Value);
    console.log("Crystal 4: " + crystal4Value);

    // Assigns the values to the crystal elements
    $("#crystal1").attr("data-value", crystal1Value);
    $("#crystal2").attr("data-value", crystal2Value);
    $("#crystal3").attr("data-value", crystal3Value);
    $("#crystal4").attr("data-value", crystal4Value);

    console.log($("#crystal1").attr("data-value"));
    console.log($("#crystal2").attr("data-value"));
    console.log($("#crystal3").attr("data-value"));
    console.log($("#crystal4").attr("data-value"));

    // Update all other divs
    randomNumber = Math.floor(Math.random() * 101) + 19;
    $("#random-number").text(randomNumber);

    currentScore = 0;
    updateScore();
    updateWins();
    updateLosses();

    console.log(randomNumber);

}

function updateLosses() {
    $("#losses").text(losses);
}

function updateScore() {
    $("#current-score").text(currentScore);
}

function updateWins() {
    $("#wins").text(wins);
}

$(function(){
    wins = 0;
    losses = 0;
    currentScore = 0;

    reset();

    $(".crystal").on("click",function(){
        $("#game-state").text("Game On!");
        currentScore += parseInt($(this).attr("data-value"));

        if (currentScore === randomNumber) {
            $("#game-state").text("You Won!");
            wins++;
            reset();
        } else if (currentScore > randomNumber) {
            $("#game-state").text("You Lost!");
            losses++;
            reset();
        } else {
            updateScore();
        }

    })






});