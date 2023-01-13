function getComputerChoice() {
  const choices = ["rock", "paper", "scissor"];
  return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerChoice, computerChoice) {
  //   When both player picked the same
  if (playerChoice === computerChoice) {
    return "Tie! both player picked the same option";
  }

  // Temporary variable to contain the winner
  let winner = "";
  let winningChoice = "";
  let losingChoice = "";

  // When player picked [rock]
  if (playerChoice === "rock") {
    if (computerChoice === "paper") {
      winner = "Computer";
      winningChoice = "paper";
      losingChoice = "rock";
    } else {
      winner = "Player";
      winningChoice = "rock";
      losingChoice = "scissor";
    }
  }
  // When player picked [paper]
  else if (playerChoice === "paper") {
    if (computerChoice === "scissor") {
      winner = "Computer";
      winningChoice = "scissor";
      losingChoice = "paper";
    } else {
      winner = "Player";
      winningChoice = "paper";
      losingChoice = "rock";
    }
  }
  // When player picked [scissor]
  else if (playerChoice === "scissor") {
    if (computerChoice === "rock") {
      winner = "Computer";
      winningChoice = "rock";
      losingChoice = "scissor";
    } else {
      winner = "Player";
      winningChoice = "scissor";
      losingChoice = "paper";
    }
  }

  // Returning the assembled string
  return `The winner is ${winner}! ${winningChoice} beats ${losingChoice}`;
}
