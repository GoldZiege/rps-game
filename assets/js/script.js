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
    let result = checkWinner(playersChoice, comChoice);
    alert(`player ${result}`);
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
    }
    return comChoice;
}

function checkWinner(playersChoice, comChoice) {
    let result;
    if (playersChoice === "rock") {
        switch (comChoice) {
            case "rock":
                result = "draw";
                break;
            case "paper":
                result = "lose";
                break;
            case "scissors":
                result = "win";
                break;
            case "lizard":
                result = "win";
                break;
            case "spock":
                result = "lose";
                break;
        }
    } else if (playersChoice === "paper") {
        switch (comChoice) {
            case "rock":
                result = "win";
                break;
            case "paper":
                result = "draw";
                break;
            case "scissors":
                result = "lose";
                break;
            case "lizard":
                result = "lose";
                break;
            case "spock":
                result = "win";
                break;
        }
    } else if (playersChoice === "scissors") {
        switch (comChoice) {
            case "rock":
                result = "lose";
                break;
            case "paper":
                result = "win";
                break;
            case "scissors":
                result = "draw";
                break;
            case "lizard":
                result = "win";
                break;
            case "spock":
                result = "lose";
                break;
        }
    } else if (playersChoice === "lizard") {
        switch (comChoice) {
            case "rock":
                result = "lose";
                break;
            case "paper":
                result = "win";
                break;
            case "scissors":
                result = "lose";
                break;
            case "lizard":
                result = "draw";
                break;
            case "spock":
                result = "win";
                break;
        }
    } else if (playersChoice === "spock") {
        switch (comChoice) {
            case "rock":
                result = "win";
                break;
            case "paper":
                result = "lose";
                break;
            case "scissors":
                result = "win";
                break;
            case "lizard":
                result = "lose";
                break;
            case "spock":
                result = "draw";
                break;
        }
    }
    if (result === "win") {
        playerWins();
    } else if (result === "lose") {
        computerWins();
    }

    return result;
}

function playerWins() {
    let oldScore = parseInt(document.getElementById("player-score").innerText);
    document.getElementById("player-score").innerText = ++oldScore;
}

function computerWins() {
    let oldScore = parseInt(document.getElementById("opponent-score").innerText);
    document.getElementById("opponent-score").innerText = ++oldScore;
}