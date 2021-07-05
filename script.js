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

function getFinalWinner(p1, p2) {
  console.log(p1 > p2 ? "You WIN!" : "Sorry you lost! ;(");
}

function endGame() {
    buttons.forEach(button => button.disabled=true)
    comments.innerText = "press any key to play again! or exit"
}

function game() {
  let playerSelection = this.innerText;
  let computerSelection = computerPlay();

  let roundResult = playRound(playerSelection, computerSelection);

  // use switch

  if (roundResult == "tie") {
    console.log("TIE!!!");
  } else if (roundResult == "player") {
    console.log(`You Win! ${playerSelection} beats ${computerSelection}!`);
    playerScore.innerText++;
  } else {
    console.log(`You Lose! ${computerSelection} beats ${playerSelection}!`);
    computerScore.innerText++;
  }  
  
  if (playerScore.innerText == 2 || computerScore.innerText == 2) {
      endGame()
    getFinalWinner(playerScore.innerText, computerScore.innerText);
}

  }