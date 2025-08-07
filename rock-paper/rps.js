const options = document.querySelectorAll(".this");
const msg = document.getElementById("msg");
const userScorePara = document.querySelectorAll(".score p")[0];
const compScorePara = document.querySelectorAll(".score p")[2];

let userScore = 0;
let compScore = 0;

const getCompChoice = () => {
    const choices = ["rock", "paper", "scissors"];

    const value = Math.floor(Math.random() * 3);
    return choices[value];
}

options.forEach(option => {
    option.addEventListener("click", () => {
        const userChoice = option.classList[0];
        playGame(userChoice);
    });
});

const playGame = (userChoice) => {
    const compChoice = getCompChoice();
    const result = getResult(userChoice, compChoice);

    if(document.querySelector(".board").style.display === "none") {
        document.querySelector(".board").style.display = "flex";
    }

    if(result == "draw") {
        msg.textContent = "Draw! You both selected same choice";
        msg.style.backgroundColor = "blue";
    }

    else if(result == "win") {
        msg.textContent = "Yay! You won congrats";
        msg.style.backgroundColor = "green";
        userScorePara.textContent = userScore;
    }

    else {
        msg.textContent = "Oh-No! Sadly You lost!!";
        msg.style.backgroundColor = "red";
        compScorePara.textContent = compScore;
    }
}

const getResult = (userChoice, compChoice) => {
    if(userChoice === compChoice) {
        return "draw";
    }
    else if((userChoice ==="rock" && compChoice === "scissors") ||
    (userChoice === "paper" && compChoice === "rock") ||
    (userChoice === "scissors" && compChoice === "paper")) {
        userScore++;
        return "win";
    }

    else {
        compScore++;
        return "lose";
    }
}