console.log("Script running...")

/** 
 * Rule:
 * - Rock > Scissor
 * - Scissor > Paper
 * - Paper > Rock
 * 
 * PSEUDOCODE
 * - Create a function to get the random value to differentiate between 3 choices
 * - Store the value into variable ```const choice```
 * - Get the user input
 * - Keep track of the user score in a variable ```let playerscore = 0; let computerscore = 0;```
 * - Create a function to play a single round, the function will compare user's choice with the computer's choice
 *  - if user choose rock and computer choose scissor, display a message that the user is winning
 *  - if user choose scissor and computer choose paper, display a message that the user is winning
 *  - if user choose paper and computer choose rock, display a message that the user is winning
 *  - if user's choice and computer's choice are the same display a message that the result is a tie or draw
*/

// A function to get random number between 1 - 3 that will determine the computer choice
const getComputerChoice = () => Math.floor(Math.random() * 3) + 1;

// A function to get input from player
const getPlayerChoice = () => prompt("Type 'Rock', 'Paper' or 'Scissor' to play:");

// A function to start the game
const playGame = () => {
  // total round the game will run
  const totalRound = 5;

  // Scores for both player and computer
  let playerScore = 0;
  let computerScore = 0;

  // A function that will run every round
  // compare the player and computer choice
  // and return the result
  const playRound = (player = "", computer = 0) => {
    // check the type of player input
    // if it's string convert it to lowercase
    player = typeof player === "string" && player.toLowerCase();
    
    // convert number into rock, paper or scissor before comparing it with the player input
    computer = computer === 1 ? "rock" : computer === 2 ? "paper" : "scissor";

    console.log(`Player choose: ${player} | Computer choose: ${computer}`);

    if (!player) {
      console.log("You didn't write any input, so the computer win this round");
      return "computer"
    } else {
      if (player === "rock") {
        if (computer === "paper") {
          console.log("Rock loses to Paper, Computer win this round!")
          return "computer";
        } else if (computer === "scissor") {
          console.log("Rock beats Scissor, You win this round!");
          return "player";
        } else {
          console.log(`Both choose Rock. The result is a draw!`);
          return "draw";
        }
      } else if (player === "paper") {
        if (computer === "scissor") {
          console.log("Paper loses to Scissor, Computer win this round!");
          return "computer";
        } else if (computer === "rock") {
          console.log("Paper beats Rock, You win this round!");
          return "player";
        } else {
          console.log(`Both choose Paper. The result is a draw!`);
          return "draw";
        }
      } else if (player === "scissor") {
        if (computer === "rock") {
          console.log("Scissor loses to Rock, Computer win this round!");
          return "computer";
        } else if (computer === "paper") {
          console.log("Scissor beats Paper, You win this round!");
          return "player";
        } else {
          console.log(`Both choose Scissor. The result is a draw!`);
          return "draw";
        }
      } else {
        console.log("You wrote something that isn't 'rock', 'paper' or 'scissor'");
        return "draw";
      }
    }
  }

  console.log("Game Start!");
  console.log(`Player Score: ${playerScore} | Computer Score: ${computerScore}`);

  // loop n number of round
  for (let i = 1; i <= totalRound; i++) {
    console.log(`Round: ${i}`)

    // run the playRound function and get both player and computer choice
    const result = playRound(getPlayerChoice(), getComputerChoice());

    if (result === "player") {
      playerScore++;
      console.log(`Player Score: ${playerScore} | Computer Score: ${computerScore}`);
    } else if (result === "computer") {
      computerScore++;
      console.log(`Player Score: ${playerScore} | Computer Score: ${computerScore}`);
    } else {
      console.log(`Player Score: ${playerScore} | Computer Score: ${computerScore}`);
    }
  }

  console.log("Game Over!")

  // display an alert to show the winner
  if (playerScore > computerScore) {
    alert(`Congratulations, You win this game!\n\nThe final score is:\nPlayer score: ${playerScore}\nComputer score: ${computerScore}`)
  } else {
    alert(`Computer win this game!\n\nThe final score is:\nPlayer score: ${playerScore}\nComputer score: ${computerScore}`)
  }
}

playGame();