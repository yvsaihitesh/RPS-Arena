const choice = document.querySelectorAll(".player button")
const buttons = document.querySelectorAll(".rock,.paper,.scissor")
const botButtons = document.querySelectorAll(".bot button")
const startButton = document.getElementsByClassName("start")[0];
const rulesButton = document.getElementsByClassName("rules")[0];
const infoButton = document.getElementsByClassName("info")[0];
const pauseButton = document.querySelector("div .pause")
const maxPoints = document.getElementById("maxpoints")
const playerdisplay = document.getElementById("playerscore")
const botdisplay = document.getElementById("botscore")
const controlDiv = document.getElementById("controls")
const Note = document.getElementById("note");
const Note1 = document.getElementById("note1");
const playercontainer=document.getElementById("player");
const botcontainer=document.getElementById("bot");
let allPlayerChoices = [];
let allBotChoices = [];
let allPlayerScores = [];
let allBotScores = [];

//To show the howered buttons
const displayOption = document.createElement("div");
document.body.append(displayOption);

// //To display players choice
const displayPlayerChoice=document.createElement("div");
displayPlayerChoice.style.color="white";
displayPlayerChoice.style.position="absolute";
displayPlayerChoice.style.top="75%";
displayPlayerChoice.style.left="35%";
displayPlayerChoice.style.fontSize="1.5rem";
playercontainer.appendChild(displayPlayerChoice);


// //To display players choice
const displayBotChoice=document.createElement("div");
displayBotChoice.style.color="white";
displayBotChoice.style.position="absolute";
displayBotChoice.style.top="75%";
displayBotChoice.style.left="35%";
displayBotChoice.style.fontSize="1.5rem";
botcontainer.appendChild(displayBotChoice);

//Creating score increment element, to display increment of scores
const increment=document.createElement("div");
increment.textContent="+1";
increment.style.color="green";
increment.style.backgroundColor="white";
increment.style.borderRadius="5px";
increment.style.position="absolute";
increment.style.top="92%";
increment.style.left="5%";
increment.style.fontSize="2rem";

//Creating an div which shows warning if player doesn't choose any option
const warningdisplay=document.createElement("div");
warningdisplay.style.backgroundColor="red";
warningdisplay.style.color="yellow";
warningdisplay.style.display="none";
warningdisplay.style.padding="1vh";
document.body.append(warningdisplay);

//Creating an div that acts as an timer displaying rock,paper,scissor,shoot! commands
const titles = document.createElement("div");
titles.style.display="none";
titles.style.position="absolute";
titles.style.backgroundColor="orange";
titles.style.borderRadius="5px";
titles.style.padding="1vh";
document.body.append(titles);

//Storing orginal positions of buttons
const startSilbling=startButton.nextElementSibling;
const rulesSibling=rulesButton.nextElementSibling;

//Customizing div created in html
const winnerdisplay= document.getElementById("winnerdisplay")
winnerdisplay.style.display="none";
winnerdisplay.style.backgroundColor="white";

//Creating an button to take us back to homepage
const homepage=document.createElement("button");
homepage.textContent="Home Page";
homepage.classList.add("homepage");

//creating an button to show the game play
const resultButton=document.createElement("button");
resultButton.textContent="Your Gameplay";
resultButton.classList.add("results");

//Intializing variables
let playerScore =0;
let botScore =0;
const choices = ["rock","paper","scissor"];
let playerChoice =null;
let maxScore=3;
let gamePasued = false;

//To describe the hovered button detais
choice.forEach((button) => {
    button.addEventListener("mouseover", (event) => {
    displayOption.textContent=button.textContent;
    displayOption.style.position = "absolute"
    displayOption.style.display="block";
    displayOption.style.zIndex="1000";
    });
    button.addEventListener("mousemove", (event) => {
    displayOption.style.left = `${event.pageX + 10}px`;
    displayOption.style.top = `${event.pageY + 10}px`;
    displayOption.style.backgroundColor="yellow";
    });
    button.addEventListener("mouseout", () => {
        displayOption.style.display="none";
    });
});

//Starting the game
startButton.addEventListener("click", () => {
    if(startButton.classList.contains("stop")){
        startButton.textContent="Start";
        startButton.classList.remove("stop");
        location.reload();
    }
    else if(startButton.classList.contains("playagain")){
        controlDiv.insertBefore(rulesButton,rulesSibling);
        controlDiv.insertBefore(startButton,startSilbling);
        winnerdisplay.removeChild(resultButton);
        winnerdisplay.removeChild(homepage);
        allPlayerChoices = [];
        allBotChoices = [];
        allPlayerScores = [];
        allBotScores = [];
        increment.style.display="none";
        displayBotChoice.style.display="none";
        displayPlayerChoice.style.display="none";
        initiateTheGame();
    }
    else{
        initiateTheGame();
    }
});

//Intializing functions of pause button
pauseButton.addEventListener("click", () => {
    if(pauseButton.classList.contains("resume")){
        pauseButton.textContent="Pause";
        pauseButton.classList.remove("resume");
        gamePasued=false;
        Note.style.display="none";
        Note1.style.display="flex";
        const docElement = document.documentElement;

        if (docElement.requestFullscreen) {
            docElement.requestFullscreen()
                .then(() => {
                    setTimeout(lockOrientation, 500);
                })
        } 
        handlingGame();
    }
    else{
        pauseButton.classList.add("resume");
        pauseButton.textContent="Resume";
        gamePasued=true;
        gameData();
    }
});

//Function that converts start button to stop
const convertStartToStop = () => {
    startButton.classList.add("stop");
    startButton.textContent="Stop";
};

//Game logic and mechanism
const handlingGame = () => {
    playerChoice=null;
    let timer=0;

    interval=setInterval(() => {
        if(gamePasued) {
            clearInterval(interval);
            return;
        }
        timer++;
        if(timer===1) {
            titles.textContent="Rock";
            titles.style.display="block";
        }
        else if(timer===2){
            titles.textContent="Paper";
            titles.style.display="block";
        }
        else if(timer===3){
            titles.textContent="Scissor";
            titles.style.display="block";
        }
        else if(timer===4){
            titles.textContent="Shoot!";
            titles.style.display="block";
        }
        else if(timer===6){
            clearInterval(interval);
            titles.style.display="none";
// Getting botchoice
const botChoice = choices[Math.floor(Math.random() * choices.length)].trim().toLowerCase();

//Checking whether player doesn't choose any option
            if(playerChoice === null) {
                Note1.style.display="none";
                warningdisplay.style.display="flex";
                warningdisplay.textContent="Warning: According to Rule.5, as you didn't choose an option your score will be reduced by one";
            setTimeout(() => {
            warningdisplay.style.display="none";
            Note1.style.display="flex";
            }, 3000);
            if(playerScore>0)
            {
            increment.textContent="-1";
            const container=document.getElementById("player");
            container.appendChild(increment);
            increment.style.display="block";
            setTimeout(() => {
                increment.style.display="none";
            }, 1500);
            }
            else{
                increment.style.display="none";
            }
            playerScore=Math.max(0,playerScore - 1);
            playerdisplay.innerHTML=`Score: ${playerScore}`;
        }
        
//Displaying the choosen option of both player and bot        
            botButtons.forEach((button) => {
                if(button.textContent.toLowerCase().trim()===botChoice)
                {
                    button.style.border="5px solid blue";
                    setTimeout(() => {
                        button.style.border="none";
                    }, 1000);
                }
            });
            choice.forEach((button) => {
                if(button.textContent.toLowerCase().trim()===playerChoice)
                {
                    button.style.border="5px solid blue";
                    setTimeout(() => {
                        button.style.border="none";
                    }, 1000);
                }
            });
            
        
//Logic of the game      
        if(playerChoice === botChoice || playerChoice===null)
        {
            displayPlayerChoice.textContent=`Player Choice: ${playerChoice}`;
            displayBotChoice.textContent=`Bot Choice: ${botChoice}`;
            displayBotChoice.style.display="block";
            displayPlayerChoice.style.display="block";
            setTimeout(() => {
                displayBotChoice.style.display="none";
                displayPlayerChoice.style.display="none";
            }, 1500);
        }
        else if((playerChoice === "rock" && botChoice === "scissor") || (playerChoice === "scissor" && botChoice === "paper") || (playerChoice === "paper" && botChoice === "rock"))
        {
            playerScore++;
            increment.textContent="+1";
            displayPlayerChoice.textContent=`Player Choice: ${playerChoice} , you won!`;
            displayBotChoice.textContent=`Bot Choice: ${botChoice}`;
            const container = document.getElementById("player");
            container.appendChild(increment);
            increment.style.display="block";
            displayBotChoice.style.display="block";
            displayPlayerChoice.style.display="block";
            playerdisplay.innerHTML=`Score: ${playerScore}`;
            setTimeout(() => {
                increment.style.display="none";
                displayBotChoice.style.display="none";
                displayPlayerChoice.style.display="none";
            }, 1500);
        }
        else {
            botScore++;
            increment.textContent="+1";
            displayPlayerChoice.textContent=`Player Choice: ${playerChoice} , you lost!`;
            displayBotChoice.textContent=`Bot Choice: ${botChoice}`;
            const container=document.getElementById("bot");
            container.appendChild(increment);
            increment.style.display="block";
            displayBotChoice.style.display="block";
            displayPlayerChoice.style.display="block";
            botdisplay.innerHTML=`Score: ${botScore}`;
            setTimeout(() => {
                increment.style.display="none";
                displayBotChoice.style.display="none";
                displayPlayerChoice.style.display="none";
            }, 1500);
        }
        allPlayerChoices.push(playerChoice);
        allBotChoices.push(botChoice);  
        allPlayerScores.push(playerScore);
        allBotScores.push(botScore);
//Showing the results
        if(playerScore===maxScore) {
            sessionStorage.setItem("playerChoices", JSON.stringify(allPlayerChoices));
            sessionStorage.setItem("botChoices", JSON.stringify(allBotChoices));
            sessionStorage.setItem("playerScores", JSON.stringify(allPlayerScores));
            sessionStorage.setItem("botScores", JSON.stringify(allBotScores));
            winnerdisplay.textContent=`You WON! ,by ${playerScore - botScore} points :)`;
            playerScore=0;
            botScore=0;
            displayingTheWinner();
        }
        else if(botScore===maxScore) {
            sessionStorage.setItem("playerChoices", JSON.stringify(allPlayerChoices));
            sessionStorage.setItem("botChoices", JSON.stringify(allBotChoices));
            sessionStorage.setItem("playerScores", JSON.stringify(allPlayerScores));
            sessionStorage.setItem("botScores", JSON.stringify(allBotScores));
            winnerdisplay.textContent=`You LOST! ,by ${botScore - playerScore} points :(`;
            playerScore=0;
            botScore=0;
            displayingTheWinner();
        }
        else{
            handlingGame();
        }
        }
    }, 1000);
        
};

//Finding the players choice
choice.forEach((button) => {
    button.addEventListener("click", () => {
        playerChoice=button.textContent.trim().toLowerCase();
        
    });
});

//Checking for any change in maxscore
maxPoints.addEventListener("change", () => {
    maxScore = parseInt(maxPoints.value, 10);
});


homepage.addEventListener("click", () => {
    location.reload();
    const docElement = document.documentElement;

    if (docElement.requestFullscreen) {
        docElement.requestFullscreen()
            .then(() => {
                setTimeout(lockOrientation, 500); // Add delay before locking orientation
            })
    } 
});

resultButton.addEventListener("click", () => {
    window.location.href="RPSresults.html";
});


rulesButton.addEventListener("click", () => {
    if(startButton.classList.contains("stop")){
       gameData();
    }
    const docElement = document.documentElement;

    if (docElement.requestFullscreen) {
        docElement.requestFullscreen()
            .then(() => {
                setTimeout(lockOrientation, 500); // Add delay before locking orientation
            })
    } 
    window.location.href="RPSrules.html";
    
});

infoButton.addEventListener("click", () => {
   if(startButton.classList.contains("stop")){
      gameData();
   }
    window.location.href="RPSrules.html";
});

let paused = sessionStorage.getItem("paused") === "true";
window.addEventListener("load", () => {
   if(paused) {
    playerScore = parseInt(sessionStorage.getItem("playerScore"), 10);
    botScore = parseInt(sessionStorage.getItem("botScore"), 10);
    maxScore = parseInt(sessionStorage.getItem("maxScore"), 10);
    allPlayerChoices = JSON.parse(sessionStorage.getItem("playerChoices")) || [];
    allBotChoices = JSON.parse(sessionStorage.getItem("botChoices")) || [];
    allPlayerScores = JSON.parse(sessionStorage.getItem("playerScores")) || [];
    allBotScores = JSON.parse(sessionStorage.getItem("botScores")) || [];
    playerdisplay.innerHTML=`Score: ${playerScore}`;
    botdisplay.innerHTML=`Score: ${botScore}`;
    maxPoints.value=maxScore;
    diblurAndEnableElements();
    paused=false;
    pauseButton.style.visibility="visible";
    pauseButton.textContent="Resume";
    pauseButton.classList.add("resume");
    convertStartToStop();
    sessionStorage.removeItem("paused");
    }
});

//function that starts the game
const initiateTheGame = () => {
    const docElement = document.documentElement;

    if (docElement.requestFullscreen) {
        docElement.requestFullscreen()
            .then(() => {
                setTimeout(lockOrientation, 500); // Add delay before locking orientation
            })
    } 
    const elementsToEnable = document.querySelectorAll(".player button");
    elementsToEnable.forEach(element => {
        element.style.pointerEvents="auto";
    });
    playerScore=0;
    botScore=0;
    maxScore = parseInt(maxPoints.value, 10);
    winnerdisplay.style.display="none";
    console.log(maxScore);
    playerdisplay.innerHTML=`Score: ${playerScore}`;
    botdisplay.innerHTML=`Score: ${botScore}`;
    diblurAndEnableElements();
    pauseButton.style.visibility="visible";
    convertStartToStop();
    Note.style.display="none";
    Note1.style.display="flex";
    handlingGame();
};

//Storing the game data 
const gameData = () => {
    sessionStorage.setItem("paused","true");
    sessionStorage.setItem("playerScore", playerScore);
    sessionStorage.setItem("botScore", botScore);
    sessionStorage.setItem("maxScore", maxScore);
    sessionStorage.setItem("playerChoices", JSON.stringify(allPlayerChoices));
    sessionStorage.setItem("botChoices", JSON.stringify(allBotChoices));
    sessionStorage.setItem("playerScores", JSON.stringify(allPlayerScores));
    sessionStorage.setItem("botScores", JSON.stringify(allBotScores));
    
};

//Function to display the results
const displayingTheWinner = () => {
    winnerdisplay.style.display="flex";
            startButton.textContent="Play Again";
            startButton.classList.remove("stop");
            startButton.classList.add("playagain");
            winnerdisplay.appendChild(startButton);
            winnerdisplay.appendChild(resultButton);
            winnerdisplay.appendChild(homepage);
            winnerdisplay.appendChild(rulesButton);
            pauseButton.style.visibility="hidden";
            blurAndDisableElements();
};

//Function to blur all elements and disable all pointer events except for the winnerdisplay
const blurAndDisableElements = () => {
    const elementsToBlur = document.querySelectorAll("body > *:not(#winnerdisplay,.playagain,.rules,.homepage,.results)");
    elementsToBlur.forEach(element => {
        element.style.filter = "blur(5px)";
    });
    const elementsToDisable = document.querySelectorAll("body *:not( #winnerdisplay, .playagain,.rules,.homepage,.results)");
    elementsToDisable.forEach(element => {
        element.style.pointerEvents="none";
    });
};

//Function to diblur all elements and enable all pointer events
const diblurAndEnableElements = () => {
    const elementsToDeblur = document.querySelectorAll("body > *:not(#winnerdisplay,.playagain,.rules,.homepage)");
    elementsToDeblur.forEach(element => {
        element.style.filter = "none";
    });
    const elementsToEnable = document.querySelectorAll("body *:not(#bot .rock, #bot .paper,#bot .scissor, #winnerdisplay, .playagain,.rules,.homepage)");
    elementsToEnable.forEach(element => {
        element.style.pointerEvents="auto";
    });
};

//To lock device to landscape mode
function lockOrientation() {

    if (screen.orientation && screen.orientation.lock) {
        screen.orientation.lock('landscape')
    }
}

