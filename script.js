let playerScore = 0;
let computerScore = 0;

// Get the user's choice
function getPlayerChoice() {
    let choice = prompt('Rock, paper, scissors: GO!', '');
    return choice;
}

// Get the computer's choice
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;

    if (choice === 1) {
        return 'rock';
    } else if (choice === 2) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

// Play 1 round of the game
function playRound(playerSelection, computerSelection) {
    let playerChoice = playerSelection.toLowerCase();
    let computerChoice = computerSelection.toLowerCase();

    if (playerChoice === 'rock' && computerChoice === 'scissors') {
        return 'You win! Rock beats scissors.';
    } else if (playerChoice === 'paper' && computerChoice === 'rock') {
        return 'You win! Paper beats rock.';
    } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
        return 'You win! Scissors beats paper.';
    } else if (playerChoice === 'rock' && computerChoice === 'paper') {
        return 'You lose! Paper beats rock.';
    } else if (playerChoice === 'paper' && computerChoice === 'scissors') {
        return 'You lose! Scissors beats paper.';
    } else if (playerChoice === 'scissors' && computerChoice === 'rock') {
        return 'You lose! Rock beats scissors.';
    } else {
        return 'Tie!';
    }
}

// Play 5 rounds of the game, tally score, and declare winner
function game() {
    for (let i = 0; i < 5; i++) {
        console.log('Round: ' + +(i + 1));
        let playerSelection = getPlayerChoice();
        console.log('Player choice: ' + playerSelection);
        let computerSelection = getComputerChoice();
        console.log('Computer choice: ' + computerSelection);
        let roundResult = playRound(playerSelection, computerSelection);
        console.log('Result: ' + roundResult);

        if (roundResult.includes('win')) {
            playerScore++;
            console.log('Player score: ' + playerScore);
            console.log('Computer score: ' + computerScore);
        } else if (roundResult.includes('lose')) {
            computerScore++;
            console.log('Player score: ' + playerScore);
            console.log('Computer score: ' + computerScore);
        } else {
            console.log('Player score: ' + playerScore);
            console.log('Computer score: ' + computerScore);
        }
        console.log('--');
    }

    if (playerScore > computerScore) {
        console.log('Gratz, you won :)');
    } else if (playerScore < computerScore) {
        console.log('The computer won :(');
    } else {
        console.log('It\'s a tie!');
    }
}

game();