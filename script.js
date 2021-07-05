let buttons = document.querySelectorAll("button");
buttons.forEach((button) => button.addEventListener("click", game));

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


function endGame() {
    buttons.forEach(button => button.disabled=true)
    comments.innerText = "press any key to play again! or exit"
}

function game() {
  let score = {
    player : parseInt(playerScore.innerText) + 1 ,
    computer: parseInt(computerScore.innerText) + 1,

    updatePlayer() {
      playerScore.innerText++
    },
    updateComp() {
      computerScore.innerText++
    },
    checkForWinner(n) {
      return this.player == n || this.computer == n
    },
    getWinner() {
    console.log(this.player > this.computer ? "You WIN!" : "Sorry you lost! ;(")
    }
  }


  let playerSelection = this.innerText;
  let computerSelection = computerPlay();

  let roundResult = playRound(playerSelection, computerSelection);

  // use switch

  if (roundResult == "tie") {
    console.log("TIE!!!");
  } else if (roundResult == "player") {
    console.log(`You Win! ${playerSelection} beats ${computerSelection}!`);
    score.updatePlayer()
    
  } else {
    console.log(`You Lose! ${computerSelection} beats ${playerSelection}!`);
    score.updateComp()
  }  

  if (score.checkForWinner(2)) {
    score.getWinner()
    endGame()
  }
}

