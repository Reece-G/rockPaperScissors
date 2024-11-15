// EVENTS
const scoreboard = document.querySelector("#scoreboard span")
const playerScoreboard = document.querySelector("#playerScoreboard")
const computerScoreboard = document.querySelector("#computerScoreboard")
const buttons = document.querySelectorAll("button");
const gameResult = document.querySelector("#results");
let playerScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.id)
    })
})

function playRound(player) {
    let computer = getComputerChoice();
    decideWinner(player, computer)
    
    computerScoreboard.textContent = `Computer score: ${computerScore}`;
    playerScoreboard.textContent = `Player score: ${playerScore}`;
    
    checkScore()
}

function checkScore() {
    if (playerScore == 5) {
        scoreboard.textContent = "You have won!";
        playerScore = 0;
        computerScore = 0;

    }
    else if (computerScore == 5) {
        scoreboard.textContent = "The computer has won!";
        playerScore = 0;
        computerScore = 0;
    }
}
// random computer choice generator 
function getComputerChoice() {
    let computerChoice = Math.ceil(Math.random() * 3);
    return computerChoice;
}

function decideWinner(player, computer) {
    if (computer == player) {
        playerScore++
        computerScore++
        gameResult.textContent = "It's a tie!"
    }
    
else if(computer == 3) {
    if (player == 2) {
        computerScore++
        gameResult.textContent ="You lose! Rock beats Scissors!";
    }
    else {
        playerScore++
        gameResult.textContent = "You win! Paper beats Rock!";
    }
}

else if (computer == 2) {
    if (player == 3) {
        playerScore++
        gameResult.textContent = "You win! Rock beats Scissors!";
    }
    else {
        computerScore++
        gameResult.textContent = "You lose! Scissors beats Paper!";
    }
}

else {
    if (player == 3) {
        computerScore++
        gameResult.textContent = "You lose! Paper beats Rock";
    }
    else {
        playerScore++
        gameResult.textContent = "You win! Scissors beats paper!";
    }
}
}

