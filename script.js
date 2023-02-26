let playerScore = 0;
let computerScore = 0;
let roundResult = '';
let winnerMessage = '';
const buttons = document.querySelectorAll('button');
const resultsContainer = document.querySelector('#results');
const choiceText = document.createElement('p');
const resultsText = document.createElement('p');
const scoreText = document.createElement('p');
const winnerText = document.createElement('p');

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        roundResult = 'Tie!';
    } else if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')) {
        playerScore++;
        roundResult = `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
        computerScore++;
        roundResult = `You lose! ${computerSelection} beats ${playerSelection}`;
    }

    // display the round's winner
    resultsText.textContent = `${roundResult}`;
    resultsContainer.appendChild(resultsText);

    // display the players' choices
    choiceText.textContent = `Your choice: ${playerSelection}
    Computer choice: ${computerSelection}`;
    choiceText.setAttribute('style', 'white-space: pre-line;');
    resultsContainer.appendChild(choiceText);

    // display the player's scores
    scoreText.textContent = `Player score: ${playerScore}
    Computer score: ${computerScore}`;
    scoreText.setAttribute('style', 'white-space: pre-line');
    resultsContainer.appendChild(scoreText);
}

function getWinner(playerScore, computerScore) {
    if (playerScore > computerScore) {
        winnerMessage = 'Gratz, you won :) Refresh the page to play again.';
    } else {
        winnerMessage = 'The computer won :( Refresh the page to play again.';
    }

    // display the game's winner
    winnerText.textContent = winnerMessage;
    resultsContainer.appendChild(winnerText);
}

function endGame() {
    buttons.forEach((button) => {
        button.disabled = true;
    });
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const playerSelection = button.id;
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);

        // if either player gets 5 points, determine the winner and end the game
        if (playerScore === 5 || computerScore === 5) {
            getWinner(playerScore, computerScore);
            endGame();
        }
    });
});