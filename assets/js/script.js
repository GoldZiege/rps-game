// Constants
const helpWindowRef = document.getElementById("modal-help");
const winScreenRef = document.getElementById("modal-winner");
const winnerRef = document.getElementById("win-screen-text");
const roundWinnerRef = document.getElementById("round-winner");

// Wait for the DOM to finish loading before starting the game
// Get the button elements and add event listeners to them
// This is the same as in the Love Maths project!

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    function handleButtonClick(event) {
        const buttonType = this.getAttribute("data-type");
        if (buttonType === "rock" || buttonType === "paper" || buttonType === "scissors" || buttonType === "lizard" || buttonType === "spock") {
            let playersChoice = this.getAttribute("data-type");
            runGame(playersChoice);
        } else if (buttonType === "modal-help") {
            helpWindowRef.style.display = "block";
        } else if (buttonType === "close-help") {
            helpWindowRef.style.display = "none";
        } else if (buttonType === "close-winner") {
            closeWinScrn();
        }
    }


    for (let button of buttons) {
        button.addEventListener("click", handleButtonClick);
    }
});
/**
 * The Main function that is called when the player chooses a Symbol 
 */
function runGame(playersChoice) {
    let comChoice = computersChoice(playersChoice);
    
    checkWinner(playersChoice, comChoice);
}

/**
 * Checks the difficulty setting and calls the
 * assigned function. Returns computers choice.
 */
function computersChoice(playersChoice) {
    let difficulty = document.getElementById("difficulty").value;
    let comChoice;
    if (difficulty === "easy") {
        comChoice = easyMode(playersChoice);
    } else if (difficulty === "random") {
        comChoice = randomMode();
    }

    changeComputerIcon(comChoice);
    
    return comChoice;
}

/**
 * Is called when easy mode is chosen in settings.
 * Returns computers choice based on last choice by player.
 */
function easyMode(playersChoice) {
    let lastChoice = document.getElementById("previous-choice").innerText;
    document.getElementById("previous-choice").innerText = playersChoice;
    let comChoice = lastChoice;
    return comChoice;
}

/**
 * Is called when difficult mode is chosen in settings.
 * Returns the computers choice to computersChoice function.
 */
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

/**
 * Gets the playersChoice and comChoice parameter and
 * checks which choice wins. 
 */
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
    } else if (result === "draw") {
        roundDraw();
    }
}

/**
 * Is called when the players symbol wins. Increases players
 * score and checks whether the game is over based on
 * game mode settings. 
 */
function playerWins() {
    // Tells the player when the player won the round
    roundWinnerRef.classList.remove("blue-text");
    roundWinnerRef.classList.remove("red-text");
    roundWinnerRef.classList.add("blue-text");
    roundWinnerRef.innerText = "Player Won";

    // The players score gets raised by one
    let oldScore = parseInt(document.getElementById("player-score").innerText);
    document.getElementById("player-score").innerText = ++oldScore;

    // The function checks what game mode is played
    // and if the game is over
    let gameMode = document.getElementById("game-mode").value;
    if (gameMode === "first3") {
        if (oldScore >= 3) {
            playerWinScrn();
        }
    } else if (gameMode === "first5") {
        if (oldScore >= 5) {
            playerWinScrn();
        }   
    }
}

/**
 * Is called when the computers symbol wins. Increases players
 * score and checks whether the game is over based on
 * game mode settings. 
 */
function computerWins() {
    // Tells the player when the computer won the round
    roundWinnerRef.classList.remove("blue-text");
    roundWinnerRef.classList.remove("red-text");
    roundWinnerRef.classList.add("red-text");
    roundWinnerRef.innerText = "Computer Won";

    // The computers score gets raised by one
    let oldScore = parseInt(document.getElementById("opponent-score").innerText);
    document.getElementById("opponent-score").innerText = ++oldScore;

    // The function checks what game mode is played
    // and if the game is over
    let gameMode = document.getElementById("game-mode").value;
    if (gameMode === "first3") {
        if (oldScore >= 3) {
            computerWinScrn();
        }
    } else if (gameMode === "first5") {
        if (oldScore >= 5) {
            computerWinScrn();
        }   
    }
}

/**
 * Is called when the round is a draw.
 */
function roundDraw() {
    roundWinnerRef.classList.remove("blue-text");
    roundWinnerRef.classList.remove("red-text");
    roundWinnerRef.innerText = "It's a Draw";

    let oldScore = parseInt(document.getElementById("draw-score").innerText);
    document.getElementById("draw-score").innerText = ++oldScore;
}

/**
 * Changes the computer Icon based on the comChoice parameter.
 */
function changeComputerIcon(comChoice) {
    let icon = document.getElementById("opponent-icon");
    icon.classList.remove("fa-hand-back-fist");
    icon.classList.remove("fa-hand");
    icon.classList.remove("fa-hand-scissors");
    icon.classList.remove("fa-hand-lizard");
    icon.classList.remove("fa-hand-spock");

    switch (comChoice) {
        case "rock":
            icon.classList.add("fa-hand-back-fist");
            break;
        case "paper":
            icon.classList.add("fa-hand");
            break;
        case "scissors":
            icon.classList.add("fa-hand-scissors");
            break;
        case "lizard":
            icon.classList.add("fa-hand-lizard");
             break;
        case "spock":
            icon.classList.add("fa-hand-spock");
            break;
    }
}

/**
 * Gets called when close button on win screen is pressed and
 * closes the win screen. Resets the scores. Resets the round winner indicator.
 */
function closeWinScrn() {
    winScreenRef.style.display = "none";

    document.getElementById("player-score").innerText = "0";
    document.getElementById("draw-score").innerText = "0";
    document.getElementById("opponent-score").innerText = "0";

    roundWinnerRef.classList.remove("blue-text");
    roundWinnerRef.classList.remove("red-text");
    roundWinnerRef.innerText = "Player vs. Computer";
}

/**
 * Shows the win screen for a player victory.
 */
function playerWinScrn() {
    winnerRef.innerText = "Player Wins!!!";

    winScreenRef.style.display = "block";
}

/**
 * Shows the win screen for a computer victory.
 */
function computerWinScrn() {
    winnerRef.innerText = "Computer Wins!!!";

    winScreenRef.style.display = "block";
}