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

function playRound(computer, player) {
    let computer = getComputerChoice();
    let player = getPlayerChoice();
    // compare both args for a tie
    if (computer == player) {
        console.log(`It's a tie!`)}
        // if computer picks rock (3)
        else if(computer == 3) {
            if (player == 2) {
                // Player loses with scissors (2)
                return "You lose! Rock beats Scissors!";
            }
            else {
                // Player wins with paper (1)
                return "You win! Paper beats Rock!"
            }
        }
        // if computer picks scissors
        else if (computer == 2) {
            if (player == 3) {
                // Player wins with rock (3)
                return "You win! Rock beats Scissors!";
            }
            else {
                // Player loses with paper (1)
                return "You lose! Scissors beats Paper!";
            }
        }
        // if computer picks paper
        else {
            if (player == 3) {
                // Player loses with rock
                return "You lose! Paper beats Rock";
            }
            else {
                // Player wins with scissors 
                return "You win! Scissors beats paper!"
            }
        }
        // 
}

// computer >> - player
// rock (3) >> scissors (-2) - left wins 1 
// scissors (2) >> paper (-1) -  left wins 1
// paper (1)>> rock (-3) - right wins -2

// player >> - computer 
//  rock >> scissors left wins 1 
