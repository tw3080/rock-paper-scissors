function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;
    console.log('Computer choice: ' + choice);

    // switch (choice) {
    //     case 1:
    //         return 'rock';
    //         break;
    //     case 2:
    //         return 'paper';
    //         break;
    //     case 3:
    //         return 'scissors';
    //         break;
    // }

    if (choice === 1) {
        return 'rock';
    } else if (choice === 2) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    let playerChoice = playerSelection.toLowerCase();
    let computerChoice = computerSelection.toLowerCase();
    console.log('Player choice: ' + playerChoice);

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

const playerSelection = 'rock';
const computerSelection = getComputerChoice();
console.log('Computer choice: ' + computerSelection);
console.log(playRound(playerSelection, computerSelection));

// player win conditions:
//     rock beats scissors
//     paper beats rock
//     scissors beats paper

// player lose conditions:
//     rock loses to paper
//     paper loses to scissors
//     scissors loses to rock