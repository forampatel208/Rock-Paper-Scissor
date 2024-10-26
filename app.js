let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

// Generate a random choice for the computer
const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * options.length);
  return options[randIdx];
};

// Handle a draw game
const drawGame = () => {
  msg.innerText = "Game was a draw. Play again.";
  msg.style.backgroundColor = "#081b31"; // Background color for draw
};

// Show the winner of the game
const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}.`;
    msg.style.backgroundColor = "green"; // Background color for win
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You lost. ${compChoice} beats your ${userChoice}.`;
    msg.style.backgroundColor = "red"; // Background color for loss
  }
};

// Main game function
const playGame = (userChoice) => {
  const compChoice = genCompChoice(); // Generate computer choice

  if (userChoice === compChoice) {
    // Draw game
    drawGame();
  } else {
    let userWin = false; // Initialize userWin to false
    // Determine the winner
    if (userChoice === "rock") {
      userWin = compChoice === "scissors"; // Rock beats scissors
    } else if (userChoice === "paper") {
      userWin = compChoice === "rock"; // Paper beats rock
    } else if (userChoice === "scissors") {
      userWin = compChoice === "paper"; // Scissors beat paper
    }
    showWinner(userWin, userChoice, compChoice); // Show the result
  }
};

// Add event listeners to each choice
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice); // Start the game with user choice
  });
});
