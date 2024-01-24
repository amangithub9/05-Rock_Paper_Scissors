let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScoreCard = document.querySelector("#user-score");
const compScoreCard = document.querySelector("#comp-score");

const genCompChoice = () => {    //-----WHEN COMPUTER IS PLAYING-----
    const options = ["rock", "paper", "scissors"];    // rock, paper, scissors
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
};

const drawGame = () => {
    // console.log("Game was Draw");
    msg.innerText = "Game was Draw. Play Again!";
    msg.style.backgroundColor = "#555555";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScoreCard.innerText = userScore;
        // console.log("You Win!");
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        compScore++;
        compScoreCard.innerText = compScore;
        // console.log("You Lose.");
        msg.innerText = `You Lose. ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {    // -----WHEN USER IS PLAYING-----
    // console.log("user choice = ", userChoice);
    // Generate Computer choice -> Modular programming

    const compChoice = genCompChoice();
    // console.log("comp choice = ", compChoice);

    if (userChoice === compChoice) {
        //Draw Game
        drawGame();
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            //scissors , paper
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            // rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        }
        else {
            //rock , paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};


choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        // console.log("choice was clicked", userChoice);
        playGame(userChoice);
    });
});