let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");

const genCompChoice=()=>{
    const options=["rock","paper","scissor"];
    const randInd=Math.floor(Math.random()*3);
    return options[randInd];
}

const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const drawGame=()=>{
    console.log("Match Was Draw");
}

const showWinner=(userWin)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log("You Win");
        msg.innerText="You Win";
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        console.log("You Lose.");
        msg.innerText="You Lose.";
        msg.style.backgroundColor="red";
    }
}
const playGame=(userChoice)=>{
    console.log("User choice=",userChoice);
    const CompChoice=genCompChoice();
    console.log("Comp choice=",CompChoice);
    if(userChoice===CompChoice){
        drawGame();
        msg.innerText="Game Was Draw. Play again.";
        msg.style.backgroundColor="#081b31";
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=(CompChoice==="paper")?false:true;
        }else if(userChoice==="paper"){
            userWin=(CompChoice==="scissor")?false:true;
        }else{
            userWin=(CompChoice==="rock")?false:true;
        }
        showWinner(userWin);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id")
        console.log("choice was clicked",userChoice);
        playGame(userChoice);
    });
});