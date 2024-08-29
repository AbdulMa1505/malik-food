// rock paper scissors
const choices =["rock","paper" ,"scissors"];
const PlayerDisplay =document.getElementById("PlayerDisplay");
const ComputerDisplay =document.getElementById("ComputerDisplay");
const DisplayChoice=document.getElementById("DisplayChoice");
let scoreDisplay =document.getElementById("scoreDisplay");
const playerScoreElement=document.getElementById("playerScore");
const computerScoreElement=document.getElementById("computerScore")
let playerScore =0;
let computerScore=0;

function PlayGame(choice){
    const ComputerChoice =choices[Math.floor(Math.random()*3)];
    let result ="";
    DisplayChoice.classList.remove("lost","win","tie");
    if(choice===ComputerChoice){
        result="IT'S A TIE"

    }
    else{
        switch(choice){
            case "rock":
                result=(ComputerChoice==="scissors")?"YOU WON ":"YOU LOST";
                break;
            
            case "paper":
                result=(ComputerChoice==="rock")?"YOU WON":"YOU LOST";
                break;
            case "scissors":
                result=(ComputerChoice==="paper")?"YOU WON": "YOU LOST";
                break;
        }
    
    }
    
    if(result==="YOU WON"){
        DisplayChoice.classList.add("win");
        playerScore ++;
        playerScoreElement.textContent=playerScore;

        
    }
    else if(result ==="YOU LOST"){
        DisplayChoice.classList.add("lost");
        computerScore ++;
        computerScoreElement.textContent=computerScore;
    }
    else{
        DisplayChoice.classList.add("tie");
    }
    PlayerDisplay.textContent=`PLAYER : ${choice}`;
    ComputerDisplay.textContent=` COMPUTER: ${ComputerChoice}`;
    DisplayChoice.textContent=result;

}