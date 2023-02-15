function getPlayerChoice() {
    let choice = prompt('Rock, paper, scissors: GO!', '');
    return choice;
}

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;
    // console.log('Computer choice: ' + choice);

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

function game() {
    for (let i = 0; i < 5; i++) {
        console.log('Round: ' + +(i + 1));
        let playerSelection = getPlayerChoice();
        console.log('Player choice: ' + playerSelection);
        let computerSelection = getComputerChoice();
        console.log('Computer choice: ' + computerSelection);

        console.log(playRound(playerSelection, computerSelection));
    }
}

// const playerSelection = 'rock';
// const playerSelection = prompt('Rock, paper, scissors: GO!', '');
// console.log('Your choice: ' + playerSelection);
// const computerSelection = getComputerChoice();
// console.log('Computer choice: ' + computerSelection);
// console.log(playRound(playerSelection, computerSelection));

game();

// player win conditions:
//     rock beats scissors
//     paper beats rock
//     scissors beats paper

// player lose conditions:
//     rock loses to paper
//     paper loses to scissors
//     scissors loses to rock

//

// interface: prompt
// inputs: user selection of rock, paper, or scissors && computer selection of rock, paper, or scissors
// output: game results from player's perspective

//

// for every round
// get the player's input
// get the computer input
// compare player input to computer input
// tally score
// display round results

// if the round is less than 5
// play a round
// else
// display the winner