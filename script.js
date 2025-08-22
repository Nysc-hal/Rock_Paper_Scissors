let userscore = 0;
let botscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const bg = document.querySelector("body");
const countUserScore = document.querySelector("#user-score");
const countBotScore = document.querySelector("#bot-score");

const genbotchoice = () =>{
    const options = ["Rock", "Paper", "Scissors"];
    const randidx = Math.floor(Math.random() *3);
    return options [randidx]; 
}

 const gamedraw = ()=>{
    console.log("game was draw");
    msg.innerText="Game was Draw";
     bg.style.backgroundColor = "#ffff";
 } 

 const showWinner = (playerWin) =>{
    if(playerWin){
         msg.innerText="You Win!!";
         bg.style.backgroundColor = "green";
         userscore++;
         countUserScore.innerHTML = userscore;
    }else{
         msg.innerText="You Lose";
          bg.style.backgroundColor = "red";
          botscore++;
          countBotScore.innerHTML=  botscore;
    }
 }

const playGame = (userchoice)=>{
        //Bot choice
        const BotChoice = genbotchoice();

        if(userchoice ===  BotChoice){
            gamedraw();
        }else{
            let playerWin = true;
            if (userchoice === "Rock"){
                playerWin = BotChoice === "Paper" ? false : true;
            }else if(userchoice === "Paper"){
                playerWin = BotChoice === "Scissors" ? false : true;
            }else{
                playerWin = BotChoice === "Rock" ? false : true;
            }
            showWinner(playerWin);
        }
}


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playGame(userchoice);
    });
});



