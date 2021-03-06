/*  
        Player makes selection by clicking button
        Computer makes selection
    
        Compare Player vs Computer Selection
    
        Declare Winner and amend score card
    
        Repeat until either competitor reaches a score of 5 first
    
        Declare Winner
        End game
    */

let playerScore = 0;
let computerScore = 0;
const scoreBoard = document.querySelector('.score-board');
const playerScoreBoard = document.querySelector('.score-board').firstElementChild;
const message = document.createElement('h3');
const subMessage = document.createElement('p');
const computerScoreBoard = document.querySelector('.score-board').lastElementChild;
const buttons = document.getElementsByTagName('button');
const resetButton = document.querySelector('.reset');

function computerSelect() {
    const options = ['rock', 'paper', 'scissors'];
    const computerChoice = options[Math.floor(Math.random() * options.length)];
    return computerChoice;
}

function disableButtons() {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
        resetButton.disabled = false;
    }
}

function enableButtons() {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = false;
        resetButton.disabled = true;
    }
}

function reset(e) {
    playerScore = 0;
    computerScore = 0;
    playerScoreBoard.textContent = `Player: ${playerScore}`;
    computerScoreBoard.textContent = `Computer: ${computerScore}`;
    message.textContent = '';
    subMessage.textContent = '';
    enableButtons();
    resetButton.style.display = 'none';
}

function game(e) {
    const playerSelection = e.target.id;
    const computerSelection = computerSelect();
    if (playerSelection === '') {
        return;
    }
    scoreBoard.appendChild(message);
    scoreBoard.appendChild(subMessage);

    if (playerSelection === computerSelection) {
        message.textContent = `Player choise ${playerSelection}, Computer chose ${computerSelection}, Draw`;
    } else if ((playerSelection === 'rock' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'rock')) {
        message.textContent = `Player chose ${playerSelection}, Computer chose ${computerSelection}, Computer Wins`;
        computerScore += 1;
        computerScoreBoard.textContent = `Computer: ${computerScore}`;
    } else {
        message.textContent = `Player chose ${playerSelection}, Computer chose ${computerSelection}, Player Wins`;
        playerScore += 1;
        playerScoreBoard.textContent = `Player: ${playerScore}`;
    }

    if (playerScore < 5 && computerScore < 5) {
        subMessage.textContent = 'Keep Playing';
        enableButtons();
    } else if (computerScore === 5 && playerScore < 5) {
        subMessage.textContent = 'Game Over. Computer Wins.';
        resetButton.style.display = 'inline-block';
        disableButtons();
    } else if (playerScore === 5 && computerScore < 5) {
        subMessage.textContent = 'Game Over. You Win.';
        resetButton.style.display = 'inline-block';
        disableButtons();
    }
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', game)
}

resetButton.addEventListener('click', reset);
