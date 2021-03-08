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

function playRound() {
    if (playerChoice === 'scissors' && computerChoice === 'paper') {
        return playerWin;
    } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
        return playerWin;
    } else if (playerChoice === 'paper' && computerChoice === 'rock') {
        return playerWin;
    } else if (playerChoice === 'rock' && computerChoice === 'paper') {
        return computerWin;
    } else if (playerChoice === 'paper' && computerChoice === 'scissors') {
        return computerWin;
    } else if (playerChoice === 'scissors' && computerChoice === 'rock') {
        return computerWin;
    } else if (playerChoice === computerChoice) {
        return 'tie game!';
    } else {
        return 'error! try again!';
    }
}

let result = playRound()

// determining the winner

function game() {
    console.log(result);
    if (result === computerWin) {
        computerScore++;
    } else if (result === playerWin) {
        playerScore++;
    }
}

console.log(game());
console.log(`Player ${playerScore}`);
console.log(`Computer ${computerScore}`);