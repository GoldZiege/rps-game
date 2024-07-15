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
    let comChoice;
    let comChoiceNumber = Math.floor(Math.random()*5)+1;

    switch (comChoiceNumber){
        case 1:
            comChoice = "rock";
            break;
        case 2: 
            comChoice = "paper";
            break;
        case 3:
            comChoice = "scissors";
            break;
        case 4:
            comChoice = "lizard";
            break;
        case 5:
            comChoice = "spock";
            break;
        default:
            comChoice = "rock";
    }
    return comChoice;
}

function checkWinner() {

}

function playerWins() {

}

function computerWins() {

}