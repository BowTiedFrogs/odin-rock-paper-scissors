let computerScore = 0;
let humanScore = 0;

const playAgainButton = document.getElementById('play-again');
playAgainButton.style.display = 'none';

function getComputerChoice() {
    const computerChoice = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * computerChoice.length);
    return computerChoice[randomIndex];
}

function playRound(humanChoice, computerChoice) {
    // Implement the logic for determining the winner of a round
    // Update scores accordingly
    // For example:
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        humanScore++;
        return "You win this round!";
    } else {
        computerScore++;
        return "Computer wins this round!";
    }
}

function getHumanChoice() {
    const availableChoices = ['rock', 'paper', 'scissors'];
    const resultDiv = document.getElementById('result');

    availableChoices.forEach(choice => {
        document.getElementById(choice).addEventListener('click', function() {
            const humanChoice = choice;
            const computerChoice = getComputerChoice();
            const roundResult = playRound(humanChoice, computerChoice);
            
            resultDiv.innerHTML = `
                You chose: ${humanChoice}<br>
                Computer chose: ${computerChoice}<br>
                ${roundResult}<br>
                Current score - You: ${humanScore}, Computer: ${computerScore}
            `;

            if (humanScore === 5 || computerScore === 5) {
                if (humanScore === 5) {
                    resultDiv.innerHTML += "<br>Congratulations! You won the game!";
                } else {
                    resultDiv.innerHTML += "<br>Game over. The computer won.";
                }
                // Disable buttons
                document.getElementById('rock').disabled = true;
                document.getElementById('paper').disabled = true;
                document.getElementById('scissors').disabled = true;

                // Create and add a "Play Again" button
                playAgainButton.style.display = 'inline-flex';

                // When the play again button is clicked:
                playAgainButton.addEventListener('click', () => {
                    // Reset the game
                    humanScore = 0;
                    computerScore = 0;
                    resultDiv.innerHTML = 'New game started. Choose your move!';
                    document.getElementById('rock').disabled = false;
                    document.getElementById('paper').disabled = false;
                    document.getElementById('scissors').disabled = false;
                    playAgainButton.style.display = 'none';
                });
            }
        });
    });
}

// Call this function to set up the game
getHumanChoice();