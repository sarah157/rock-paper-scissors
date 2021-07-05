function playerInput() {
  let input = prompt("Choose!").toLowerCase();
  return input[0].toUpperCase() + input.slice(1);
}

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

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; playerScore < 5 || computerScore < 5; i++) {
    let playerSelection = playerInput();
    let computerSelection = computerPlay();
    let roundResult = playRound(playerSelection, computerSelection)

    if (roundResult == "tie") {
      console.log("TIE!!!");
    } else if (roundResult == "player") {
      console.log(`You Win! ${playerSelection} beats ${computerSelection}!`);
      playerScore++
    } else {
      console.log(`You Lose! ${computerSelection} beats ${playerSelection}!`);
      computerScore++
    }
    
  }
  console.log(playerScore > computerScore ? "You WIN!" : "Sorry you lost! ;(")
}
