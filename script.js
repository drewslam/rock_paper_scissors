let playerChoice;
let computerChoice;


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

function playRound() {
    if (playerChoice == 'scissors' && computerChoice == 'paper') {
        return `${playerChoice} beats ${computerChoice}! you win!`;
    } else if (playerChoice == 'rock' && computerChoice == 'scissors') {
        return `${playerChoice} beats ${computerChoice}! you win!`;
    } else if (playerChoice == 'paper' && computerChoice == 'rock') {
        return `${playerChoice} beats ${computerChoice}! you win!`;
    } else if (playerChoice == 'rock' && computerChoice == 'paper') {
        return `${computerChoice} beats ${playerChoice}! you lose!`;
    } else if (playerChoice == 'paper' && computerChoice == 'scissors') {
        return `${computerChoice} beats ${playerChoice}! you lose!`;
    } else if (playerChoice == 'scissors' && computerChoice == 'rock') {
        return `${computerChoice} beats ${playerChoice}! you lose!`;
    } else if (playerChoice == computerChoice){
        return 'tie game!';
    } else {
        return 'error! try again!';
    }
}
// console.log(playerSelection());
// console.log(computerPlay());
console.log(playRound());