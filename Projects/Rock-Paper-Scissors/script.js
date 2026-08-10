let playerChoice;
let computerChoice;

let playerScore = 0;
let computerScore = 0;

let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");

let playerChoiceDisplay = document.querySelector("#your-choice");
let computerChoiceDisplay = document.querySelector("#computer-choice");
let result = document.querySelector("#result");

let playerScoreDisplay = document.querySelector("#player");
let computerScoreDisplay = document.querySelector("#computer");

function getComputerChoice() {
    let randomNo = Math.random() * 3;

    if (randomNo < 1) {
        return "rock";
    } else if (randomNo < 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

rock.addEventListener("click", getPlayerChoice);
paper.addEventListener("click", getPlayerChoice);
scissors.addEventListener("click", getPlayerChoice);

function getPlayerChoice(event) {
    playerChoice = event.currentTarget.id;

    computerChoice = getComputerChoice();

    let winner = determiningWinner(playerChoice, computerChoice);

    updateScore(winner);
    displayResult(playerChoice,computerChoice,winner);
}

function determiningWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "tie";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "scissors" && computerChoice === "paper") ||
        (playerChoice === "paper" && computerChoice === "rock")
    ) {
        return "Player wins";
    } else {
        return "Computer wins";
    }
}

function updateScore(winner) {
    if (winner === "Player wins") {
        playerScore++;
        playerScoreDisplay.textContent = playerScore;
    } else if (winner === "Computer wins") {
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
    }
}

function displayResult(playerChoice,computerChoice,winner){
    playerChoiceDisplay.textContent=playerChoice;
    computerChoiceDisplay.textContent=computerChoice;
    result.textContent=winner;
}