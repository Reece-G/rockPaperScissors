// determines the choice for the computer by using a random number generator
function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);
    // declare computer choice variable
    let computerChoice;
    // Conditional ternary statement to pick rock, paper or scissors
    (num == 0) ? computerChoice = "Rock" : // if num = 0 rock is assigned and so on...
        (num == 1) ? computerChoice = "Paper" :
            computerChoice = "Scissors";
    console.log(computerChoice, num);
}

// get users selection of rock, paper or scissors
function getPlayerChoice() {
    // prompt for user input and assign into userInp variable 
    let userInp = prompt("Enter Rock, Paper or Scissors: ").toLowerCase();
}
