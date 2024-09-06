function getComputerChoice() {
    const computerChoice = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * computerChoice.length);
    return computerChoice[randomIndex];
}

function getHumanChoice() {
    const availableChoices = ['rock', 'paper', 'scissors'];
    
    while (true) {
        let userChoice = prompt("Enter your choice (rock/paper/scissors):").toLowerCase();
        
        if (availableChoices.includes(userChoice)) {
            return userChoice;
        } else {
            console.log("Invalid input, try again");
        }
    }
}

function playGame() {
    
    let computerScore = 0
    let humanScore = 0

    function playRound(humanChoice, computerChoice) {
        console.log(`You chose: ${humanChoice}`);
        console.log(`Computer chose: ${computerChoice}`);

        if (humanChoice === computerChoice) {
            console.log("It's a tie!");
            return;
        }

        if (
            (humanChoice === 'paper' && computerChoice === 'rock') ||
            (humanChoice === 'rock' && computerChoice === 'scissors') ||
            (humanChoice === 'scissors' && computerChoice === 'paper')
        ) {
            humanScore++;
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        } else {
            computerScore++;
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        }
    }
    while (humanScore < 5 && computerScore < 5) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log(`Current score - You: ${humanScore}, Computer: ${computerScore}`);
    }

    if (humanScore === 5) {
        console.log("Congratulations! You won the game!");
    } else {
        console.log("Game over. The computer won.");
    }
}

// Start the game
playGame();