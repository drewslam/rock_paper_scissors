let playerChoice;
let computerChoice;
let playerScore = 0;
let computerScore = 0;

// selecting your values

function computerPlay() {
    let computerSelect = ['rock', 'paper', 'scissors'];
    return computerSelect[Math.floor(Math.random() * 3)];
}

computerChoice = computerPlay();

function playerSelection() {
    let playerSelect = prompt('rock, paper, or scissors?');
    return playerSelect.toLowerCase();
}

playerChoice = playerSelection();

// playing the game

let playerWin = `${playerChoice} beats ${computerChoice}! you win!`;
let computerWin = `${computerChoice} beats ${playerChoice}! you lose!`;

function playRound(playerChoice, computerChoice) {
    if  (
        (playerChoice === 'scissors' && computerChoice === 'paper') ||
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock')
        )   {
        return playerWin;
    } else if (
              (playerChoice === 'rock' && computerChoice === 'paper') ||
              (playerChoice === 'paper' && computerChoice === 'scissors') ||
              (playerChoice === 'scissors' && computerChoice === 'rock')
              ) {
        return computerWin;
    } else if (playerChoice === computerChoice) {
        return 'tie game!';
    } else {
        return 'error! try again!';
    }
}

let result = playRound(playerChoice, computerChoice)

// determining the winner

function game() {
    console.log(result);
    if (result === computerWin) {
        computerScore++;
        return computerWin;
    } else if (result === playerWin) {
        playerScore++;
        return playerWin;
    }
}

game();
console.log(playerChoice);
console.log(computerChoice);
console.log(`Player ${playerScore}`);
console.log(`Computer ${computerScore}`);
computerChoice = computerPlay();
playerChoice = playerSelection();
result = playRound(playerChoice, computerChoice);
game(result);
console.log(playerChoice);
console.log(computerChoice);
console.log(`Player ${playerScore}`);
console.log(`Computer ${computerScore}`);