function getComputerChoice() {
  const choices = ["rock", "paper", "scissor"];
  return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerChoice, computerChoice) {
  //   When both player picked the same
  if (playerChoice === computerChoice) {
    return { winner: "Tie" };
  }

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
  return { winner: winner, winChoice: winningChoice, loseChoice: losingChoice };
}

function handleClick(playerChoice) {
  console.log(playerChoice);
}

function handleLoad() {
  console.log("loaded");
}

const player_choice = document.querySelector(".player-pick");

function handleHover(choice) {
  player_choice.innerHTML = `Player: ${choice}`;
}

function handleUnhover() {
  player_choice.innerHTML = `Player: choosing ...`;
}
