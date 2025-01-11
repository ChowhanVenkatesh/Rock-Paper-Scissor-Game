let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
};

const drawGame = () => {
    console.log("game was draw");
    msg.innerText = "Game was Draw";
    msg.style.backgroundColor = "grey";
};

const showWinner = (userWin) => {
    if (userWin){
        console.log("you win");
        msg.innerText = "You Win";
        msg.style.backgroundColor = "green";
    } else {
        console.log("you lose");
        msg.innerText = "You Lose";
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    console.log("user Choice = ", userChoice);
    const compChoice = genCompChoice();
    console.log("comp Choice = ", compChoice);

    if ( userChoice === compChoice ){
        drawGame();
    } else {
        let userWin = true ;
        if ( userChoice == "rock") {
            //scissor, paper
            userWin = compChoice === "paper" ? false : true ;
        } else if ( userWin == "paper") {
            //scissor, rock
            userWin = compChoice === "scissor" ? false : true ;
        } else {
            //rock, paper
            userWin = compChoice === "rock" ? false : true ;
        }
        showWinner(userWin);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
}); 