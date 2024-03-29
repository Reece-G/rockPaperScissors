// determines the choice for the computer by using a random number generator
function getComputerChoice() {
    let computerChoice = Math.ceil(Math.random() * 3);
    return computerChoice;
}

// get users selection of rock, paper or scissors
function getPlayerChoice() {
    // prompt for user input and assign into userInp variable 
    let userInp = prompt("Enter Rock, Paper or Scissors: ").toLowerCase();
    // set numerical value for each selection
    (userInp == "rock") ? userNum = 3 :
        (userInp == "scissors") ? userNum = 2 :
            userNum = 1 ;
    return userNum;
}

function playRound() {
    let tie = false;
    let result;
    let resultTxt;
    let computer = getComputerChoice();
    let player = getPlayerChoice();
    // compare both args for a tie
    if (computer == player) {
            resultTxt = "It's a tie!",
            tie = true
        }
        // if computer picks rock (3)
    else if(computer == 3) {
        if (player == 2) {
            // Player loses with scissors (2)
            result = false;
            resultTxt ="You lose! Rock beats Scissors!";
        }
        else {
            // Player wins with paper (1)
            result = true;
            resultTxt = "You win! Paper beats Rock!";
        }
    }
    // if computer picks scissors
    else if (computer == 2) {
        if (player == 3) {
            // Player wins with rock (3)
            result = true;
            resultTxt = "You win! Rock beats Scissors!";
        }
        else {
            // Player loses with paper (1)
            result = false;
            resultTxt = "You lose! Scissors beats Paper!";
        }
    }
    // if computer picks paper
    else {
        if (player == 3) {
            // Player loses with rock
            result = false;
            resultTxt = "You lose! Paper beats Rock";
        }
        else {
            // Player wins with scissors 
            result = true; 
            resultTxt = "You win! Scissors beats paper!";
        }
    }
    return [tie, result, resultTxt];
    }

// computer >> - player
// rock (3) >> scissors (-2) - left wins 1 
// scissors (2) >> paper (-1) -  left wins 1
// paper (1)>> rock (-3) - right wins -2

// player >> - computer 
//  rock >> scissors left wins 1 

function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        [tie, result, resultTxt] = playRound()
        console.log(resultTxt);
        if (tie) {
            continue
        }
        else if (result) {
            playerScore++;
            continue
        }
        else {
            computerScore++;
            continue
        }
    }
    console.log(playerScore, computerScore)
    if (playerScore == computerScore) {
        console.log("It's a tie!");
    }
    else if (playerScore > computerScore) {
        console.log("Player wins!")
    }
    else {
        console.log("Computer wins!")
    }
    console.log("with a score of ", playerScore, computerScore);
}

playGame();