// Wait for the DOM to finish loading before starting the game
// Get the button elements and add event listeners to them
// This is the same as in the Love Maths project!

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener("click", function(){
            let playersChoice = this.getAttribute("data-type");
            runGame(playersChoice);
        })
    }
})

function runGame(playersChoice) {
    alert(`Player chose ${playersChoice}`);
    let comChoice = computersChoice();
    alert(`Computer chose ${comChoice}`);
}

function computersChoice() {
    let difficulty = document.getElementById("difficulty").value;
    let comChoice = "";
    if (difficulty === "easy") {
        comChoice = easyMode();
    } else if (difficulty === "random") {
        comChoice = randomMode();
    }
    return comChoice;
}

function easyMode() {
    return "rock";
}

function randomMode() {

}

function checkWinner() {

}

function playerWins() {

}

function computerWins() {

}