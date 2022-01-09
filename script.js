  let score = {
    updatePlayer() {
     playerScore.innerText++
      
    },
    updateComp() {
      computerScore.innerText++
    },
    checkForWinner(n) {
      return (computerScore.innerText == n) || (playerScore.innerText == n)
    },
    getWinner() {
    comments.innerText = this.player > this.computer ? "You WIN!" : "Sorry you lost! :("
    }

  }
let rpsButtons = document.querySelectorAll("#rpsButtons button");
rpsButtons.forEach((button) => button.addEventListener("click", game));

function computerPlay() {
  const choices = ["Rock", "Paper", "Scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) return "tie";
  if (
    (playerSelection == "Scissors" && computerSelection == "Paper") ||
    (playerSelection == "Rock" && computerSelection == "Scissors") ||
    (playerSelection == "Paper" && computerSelection == "Rock")
  ) {
    return "player";
  }
  return "computer";
}


function endGame(winner) {
    rpsButtons.forEach(button => button.disabled = true)
    finalWinnerMessage.innerText = (winner == "player") ? "You won!" : "Sorry, computer wins :("
  
    endGameResults.style.visibility = "visible";
    playAgainButton.addEventListener('click', resetGame)
}

function resetGame() {
  playerScore.innerText = "0"
  computerScore.innerText = "0"
  comments.innerText = "Welcome! Pick your weapon!"
  rpsButtons.forEach(button => button.disabled = false)
  endGameResults.style.visibility = "hidden";
}

function game() {
  let playerSelection = this.innerText;
  let computerSelection = computerPlay();

  let roundResult = playRound(playerSelection, computerSelection);

  if (roundResult == "tie") {
    comments.innerText = "TIE!";
  } else if (roundResult == "player") {
    comments.innerText = `You Win! ${playerSelection} beats ${computerSelection}!`
    score.updatePlayer()
  } else {
    comments.innerText = `You Lose! ${computerSelection} beats ${playerSelection}!`;
    score.updateComp()
  }  

if (score.checkForWinner(3)) endGame(roundResult)
}

