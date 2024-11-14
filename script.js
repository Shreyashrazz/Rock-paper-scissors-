let userScore = 0;
let compScore = 0;

const choose = document.querySelectorAll(".choose");
const msg = document.querySelector("#play");
const userScorePara = document.querySelector("#user-scr");
const compScorePara = document.querySelector("#comp-scr");


const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};


const drawGame = () =>{
    msg.innerText = "game was draw! play again 😫 ";
    msg.style.backgroundColor = "#102C57";
}


const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win ! Your ${userChoice} beats ${compChoice} 😃`;
       msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose !  ${compChoice} beats Your ${userChoice} 😔`;
        msg.style.backgroundColor = "red";        

    }
}

const playGame = (userChoice) => {
    console.log("user choice =", userChoice);
    const compChoice = genCompChoice();
    console.log("comp choice =", compChoice);
    if (userChoice === compChoice){
        drawGame();
    }else {
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }else
            userWin = compChoice === "rock" ? false : true;
        
        showWinner (userWin, userChoice, compChoice);
    }
    

}
choose.forEach((choose) => {
    choose.addEventListener("click", () => {
        const userChoice = choose.getAttribute("id");
        console.log("choice was clicked",userChoice)
        playGame(userChoice);
    })
})