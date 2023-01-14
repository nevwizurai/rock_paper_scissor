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

// DOM manipulation
let round = 1;
let score = { player: 0, computer: 0 };
let player_choice = "";
let computer_choice = "";

// ref
const el_round = document.querySelector("#round");
const el_score = document.querySelector("#score");
const el_player_pick = document.querySelector(".player-pick");
const el_com_pick = document.querySelector(".computer-pick");
const el_result = document.querySelector(".result");
const el_player_buttons = document.querySelectorAll(".btn-choice");

// method
function updateUI(element, value) {
  element.innerHTML = value;
}

function setPlayerButton(state) {
  if (state)
    el_player_buttons.forEach((el) => (el.style.visibility = "visible"));
  else el_player_buttons.forEach((el) => (el.style.visibility = "hidden"));
}

function game({ winner, winChoice, loseChoice }) {
  setPlayerButton(false);
  const nextRound = setTimeout(() => {
    setPlayerButton(true);
    updateUI(el_result, `...`);
    updateUI(el_player_pick, `Player: (selecting)`);
    updateUI(el_com_pick, `Computer: ready...`);
  }, 1500);

  if (winner === "Tie") updateUI(el_result, `${winner}!`);
  else {
    winner === "Player" ? score.player++ : score.computer++;
    updateUI(
      el_score,
      `Player: ${score.player}<br/>Computer: ${score.computer}`
    );
    updateUI(el_result, `${winner} wins! ${winChoice} beats ${loseChoice}`);
  }
  round++;
  updateUI(el_round, `Round ${round}`);

  if (!(score.player < 5) || !(score.computer < 5)) {
    setPlayerButton(false);
    clearTimeout(nextRound);
    score.player === 5
      ? updateUI(el_result, `Player Wins the Game!`)
      : updateUI(el_result, `Computer Wins the Game!`);
    return;
  }
}

// Listener
function handleLoad() {
  updateUI(el_round, `Round ${round}`);
  updateUI(el_score, `Player: ${score.player}<br/>Computer: ${score.computer}`);
}

function handleClick(choice) {
  player_choice = choice;
  computer_choice = getComputerChoice();
  updateUI(el_player_pick, `Player: ${choice}`);
  updateUI(el_com_pick, `Computer: ${computer_choice}`);
  game(playRound(player_choice, computer_choice));
}
