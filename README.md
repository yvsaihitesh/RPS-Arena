# Rock-Paper-Scissors Game 🎮
Welcome to the Rock-Paper-Scissors game! This classic game from your childhood is now available as a web-based version. Here's everything you need to know about it.[GameInterface](#game-interface), [HowToPlay](#how-to-play), [PauseResumeStop](#pause-resume-and-stop) and [WinningTheGame](#winning-the-game).
- 👇 Click the play button below to start playing:
-  [play](https://yvsaihitesh.github.io/RPS-Arena/RPS_Arena.html)

## Game Overview
This game allows you to compete against a bot in a fun and interactive way. The objective is to score the maximum points before your opponent (the bot) does. The interface is simple yet engaging.

## Game Interface

### 1.Game Settings:
At the top-right, there’s a dropdown menu where you can select the maximum points required to win the game.

### 2.Player and Bot Containers:
There are two containers on the game interface:
- Player:
    - Contains three buttons: Rock, Paper, and Scissors. You can click these to make your choice.
    - Player Score section: Displays your current score.
- Bot:
    - Contains three buttons: Rock, Paper, and Scissors, but you cannot click them. The bot will choose its option randomly.
    - Bot Score section: Displays bot's current score.

### 3.Game Controls:
Below the containers, there are four buttons:
  - **Start:** Begins the game.
  - **Pause:** Initially hidden since there’s no use for it before the game starts.
  - **Rules:** Takes you to a page explaining the rules of the game.At the end of the page there is a homepage button that takes us back to the homepage of the game.[rules](https://yvsaihitesh.github.io/RPS-Arena/RPSrules.html)
  - **More Info:** Takes you to a page that provides detailed information about the game, such as its origin, advantages, and uses.At the end of the page there is a homepage button that takes us back to the homepage of the game.[moreinfo](https://yvsaihitesh.github.io/RPS-Arena/RPSinfo.html)

## How to Play
1.Click Start to begin the game.

2.A timer between the containers appears displaying Rock, Paper, Scissors, and Shoot! sequentially for 1 second each.

3.Make your choice before "Shoot!" disappears.

4.If you don't choose in time:A warning message will appear.If your score is greater than 0, it decreases by 1.

5.Both your choice and the bot's choice are displayed below the paper button of respective containers.

6.Scores update dynamically, with a small div element displaying the changes(i.e +1,-1).

## Pause, Resume, and Stop
**Pause:** Clicking Pause pauses the game and changes the button to Resume.

  - Navigating to the Rules or More Info pages during the game pauses the game automatically.The Homepage button on these pages changes to Continue.Clicking continue will take us back to the game where we left.

**Resume:** You can resume the game from where you left off by clicking Resume.

**Stop:** Clicking Stop ends the game and returns you to the homepage.

## Winning the Game
1.The game ends when either you or the bot reaches the maximum points.

2.After the game completes.A winner message appears, blurring the rest of the screen.
 - You can then choose from four options:
    - **Play Again:** Restart the game.
    - **Homepage:** Return to the homepage.
    - **Rules:** View the game rules.
    - **Your Gameplay:** Displays a detailed table of every move, showing: Your choice and the bot’s choice, The scores for each round.It also includes a Homepage button to return to homepage.
  
I hope you enjoy this web-based version of Rock-Paper-Scissors! Can you outsmart the bot and claim victory🚀?
  
🎉 What are you waiting for? Click on play button beside to start playing the game now! 🕹️✨ [play](https://yvsaihitesh.github.io/RPS-Arena/RPS_Arena.html).
