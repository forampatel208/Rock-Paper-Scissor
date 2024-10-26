(() => {
    let userScore = 0;
    let compScore = 0;
    const body = document.querySelector("body");
    const themeToggleButton = document.querySelector("#theme-toggle");
    const themeIcon = document.querySelector("#theme-icon"); 

    const choices = document.querySelectorAll(".choice");
    const msg = document.querySelector("#msg");
    const userScorePara = document.querySelector("#user-score");
    const compScorePara = document.querySelector("#comp-score");
    const resetButton = document.querySelector("#reset");
    
    const genCompChoice = () => {
        const options = ["rock", "paper", "scissors"];
        const randIdx = Math.floor(Math.random() * 3);
        return options[randIdx];
    };

    const drawGame = () => {
        msg.innerText = "Game was Draw. Play again.";
        msg.style.backgroundColor = '#081b31';
    };

    const showWinner = (userWin, userChoice, compChoice) => {
        if (userWin) {
            userScore++;
            userScorePara.innerText = userScore;
            msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
            msg.style.backgroundColor = "green"; 
        } else {
            compScore++;
            compScorePara.innerText = compScore;
            msg.innerText = `You lost. ${compChoice} beats ${userChoice}`;
            msg.style.backgroundColor = "red";
        }
    };

    const playGame = (userChoice) => {
        const compChoice = genCompChoice();
        if (userChoice === compChoice) {
            drawGame();
        } else {
            const winningConditions = {
                rock: "scissors",
                paper: "rock",
                scissors: "paper"
            };
            const userWin = winningConditions[userChoice] === compChoice;
            showWinner(userWin, userChoice, compChoice);
        }
    };

    const resetGame = () => {
        userScore = 0;
        compScore = 0;
        userScorePara.innerText = userScore;
        compScorePara.innerText = compScore;
        msg.innerText = "Game reset! Make your choice.";
        msg.style.backgroundColor = ''; 
    };

    // Toggle between light and dark modes
    themeToggleButton.addEventListener("click", () => {
        if (body.classList.contains("light")) {
            body.classList.add("dark");
            body.classList.remove("light");
            themeIcon.innerHTML = '<i class="fa-solid fa-moon"></i>'; // Change to moon icon
        } else {
            body.classList.add("light");
            body.classList.remove("dark");
            themeIcon.innerHTML = '<i class="fa-solid fa-sun"></i>'; // Change to sun icon
        }
    });

    choices.forEach(choice => {
        choice.addEventListener("click", () => {
            const userChoice = choice.getAttribute("id");
            playGame(userChoice);
        });
    });

    resetButton.addEventListener("click", resetGame);
})();
