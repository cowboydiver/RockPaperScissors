const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  return choices[choice];
}

function playRound(playerOneSelection, playerTwoSelection) {
  if (playerOneSelection.toUpperCase() === playerTwoSelection.toUpperCase())
    return "DRAW";
  else if (
    (playerOneSelection.toUpperCase() === "ROCK") &
    (playerTwoSelection.toUpperCase() === "PAPER")
  )
    return "Computer wins!";
  else if (
    (playerOneSelection.toUpperCase() === "ROCK") &
    (playerTwoSelection.toUpperCase() === "SCISSORS")
  )
    return "Player wins!";
  else if (
    (playerOneSelection.toUpperCase() === "PAPER") &
    (playerTwoSelection.toUpperCase() === "ROCK")
  )
    return "Player wins!";
  else if (
    (playerOneSelection.toUpperCase() === "PAPER") &
    (playerTwoSelection.toUpperCase() === "SCISSORS")
  )
    return "Computer wins!";
  else if (
    (playerOneSelection.toUpperCase() === "SCISSORS") &
    (playerTwoSelection.toUpperCase() === "ROCK")
  )
    return "Computer wins!";
  else if (
    (playerOneSelection.toUpperCase() === "SCISSORS") &
    (playerTwoSelection.toUpperCase() === "PAPER")
  )
    return "Player wins!";
}

function game() {
  let numberOfRounds = 5;
  let playerScore = 0;
  let computerScore = 0;

  if (result === "Computer wins!") computerScore++;
  else if (result === "Player wins!") playerScore++;
  else if (result === "DRAW")
    if (playerScore > computerScore) return "Yeah! Player wins the game!";
    else return "Oh no! Computer wins the game!";
}

//console.log(getComputerChoice())

//const input = prompt("Write Rock, Paper or Scissors");
