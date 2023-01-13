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

function game() {
  // Setting up score variables
  let playerScore = 0;
  let computerScore = 0;

  // Playing for 5 rounds
  for (let i = 1; i <= 5; i++) {
    let playerChoice = prompt(
      `Round ${i}\nPlayer choice (rock, paper, scissor):`
    ).toLowerCase();

    let result = playRound(playerChoice, getComputerChoice());
    switch (result.winner) {
      case "Player":
        playerScore++;
        break;
      case "Computer":
        computerScore++;
        break;
    }
    console.log(`---- Round ${i} --------------------------------`);
    if (result.winner === "Tie")
      console.log("It's a Tie! both side picked the same choice!");
    else
      console.log(
        `${result.winner} wins! ${result.winChoice} beats ${result.loseChoice}!`
      );
    console.log(
      `Current Score:\nPlayer Score: ${playerScore}\nComputer Score: ${computerScore}`
    );
    console.log("------------------------------------------------");
  }

  console.log("\n\n---- Final Result ------------------------");
  console.log(`Player Score: ${playerScore}\nComputer Score: ${computerScore}`);
  console.log("--------------------------------------------");
  console.log("THANKS FOR PLAYING <3");
}

game();
