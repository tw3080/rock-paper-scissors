let playerScore = 0;
let computerScore = 0;

// Get user's choice
// function getPlayerChoice() {
//     let choice = prompt('Rock, paper, scissors: GO!', '').toLowerCase();
//     return choice;
// }

// get computer's choice
function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3) + 1;

    if (choice === 1) {
        return 'rock';
    } else if (choice === 2) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

// play 1 round of the game
function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'You win! Rock beats scissors.';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'You win! Paper beats rock.';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'You win! Scissors beats paper.';
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'You lose! Paper beats rock.';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'You lose! Scissors beats paper.';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'You lose! Rock beats scissors.';
    } else {
        return 'Tie!';
    }
}

const buttons = document.querySelectorAll('button');
const resultsContainer = document.querySelector('#results');
const selectionText = document.createElement('p');
const resultsText = document.createElement('p');
const scoreText = document.createElement('p');
const winnerText = document.createElement('p');

// console.log(buttons);

// when each button is clicked, play a round of the game
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        // get player choice
        const playerSelection = button.id;

        // get computer choice
        const computerSelection = getComputerChoice();

        // display choices
        selectionText.textContent = `Your choice: ${playerSelection}
        Computer choice: ${computerSelection}`;
        selectionText.setAttribute('style', 'white-space: pre-line;');
        resultsContainer.appendChild(selectionText);

        // get and display the results of the round
        const roundResult = playRound(playerSelection, computerSelection);
        resultsText.textContent = roundResult;
        resultsContainer.appendChild(resultsText);

        // tally the round's score
        if (roundResult.includes('win')) {
            playerScore++;
        } else if (roundResult.includes('lose')) {
            computerScore++;
        }

        // display the current score
        scoreText.textContent = `Player score: ${playerScore}
        Computer score: ${computerScore}`;
        scoreText.setAttribute('style', 'white-space: pre-line');
        resultsContainer.appendChild(scoreText);

        // after 5 wins, display the winner
        if (playerScore === 5 || computerScore === 5) {
            if (playerScore > computerScore) {
                console.log('Gratz, you won :)');
            } else if (playerScore < computerScore) {
                console.log('The computer won :(');
            } else {
                console.log('It\'s a tie!');
            }
        }
    });
});

// Play 5 rounds of the game, tally score, and declare winner
// function game() {
//     for (let i = 0; i < 5; i++) {
//         // Get player and computer choices
//         console.log('Round: ' + +(i + 1));
//         let playerSelection = getPlayerChoice();
//         console.log('Player choice: ' + playerSelection);
//         let computerSelection = getComputerChoice();
//         console.log('Computer choice: ' + computerSelection);
//         let roundResult = playRound(playerSelection, computerSelection);
//         console.log('Result: ' + roundResult);

//         // Tally the round's score
//         if (roundResult.includes('win')) {
//             playerScore++;
//             console.log('Player score: ' + playerScore);
//             console.log('Computer score: ' + computerScore);
//         } else if (roundResult.includes('lose')) {
//             computerScore++;
//             console.log('Player score: ' + playerScore);
//             console.log('Computer score: ' + computerScore);
//         } else {
//             console.log('Player score: ' + playerScore);
//             console.log('Computer score: ' + computerScore);
//         }
//         console.log('--');
//     }

//     // Determine winner
//     if (playerScore > computerScore) {
//         console.log('Gratz, you won :)');
//     } else if (playerScore < computerScore) {
//         console.log('The computer won :(');
//     } else {
//         console.log('It\'s a tie!');
//     }
// }

// game();