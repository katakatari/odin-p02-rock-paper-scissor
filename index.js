console.log("Script running...")

/** 
 * Rule:
 * - Rock > Scissor
 * - Scissor > Paper
 * - Paper > Rock
 * 
 * PSEUDOCODE
 * - When the page load display play Play game Button
 * - When play game button is clicked display the total round and current round
 * - Display Rock, Paper and Scissor for player to choose
 * - Display current score
 * - When player pick their choice, show computer's choice
 * - Compare both choice and show the result according to the rules
 * - Show the result and update the score
 * - Repeat until the total round is reached
 * - Compare the player's and computer's score
 * - The one with the highest score is the winner
 * - If the score is the same the game ended with a draw
 * - Display the result
 * - Display reset button
 * - Reset the game when the reset button is pressed
*/

// A function to get random number between 1 - 3 that will determine the computer choice
const getComputerChoice = () => Math.floor(Math.random() * 3) + 1;

// A function to get input from player
const playerlabel = document.querySelector("#player .label");
const playerChoice = document.querySelector("#player .choice");
const playerRoundResult = document.querySelector("#player .round-result");
const playerScore = document.querySelector("#player .score");

const computerlabel = document.querySelector("#computer .label");
const computerChoice = document.querySelector("#computer .choice");
const computerRoundResult = document.querySelector("#computer .round-result");
const computerScore = document.querySelector("#computer .score");

const startGame = document.querySelector("#start-game")

const choices = document.querySelector(".choices");

const showRounds = document.querySelector(".rounds");

const winner = document.querySelector("#winner");

const updateScore = (player, computer) => {
  playerScore.textContent = `Score: ${player}`;
  computerScore.textContent = `Score: ${computer}`;
}

const updateRoundResult = (player, computer) => {
  playerRoundResult.textContent = player;
  computerRoundResult.textContent = computer;
}

const rps = ["rock", "paper", "scissor"];

const rock = document.createElement("button");
rock.textContent = "Rock";
rock.id = "rock";

const paper = document.createElement("button");
paper.textContent = "Paper";
paper.id = "paper";

const scissor = document.createElement("button");
scissor.textContent = "Scissor";
scissor.id = "scissor";

// Scores for both player and computer
const score = {
  player: 0,
  computer: 0
};

const round = {
  total: 5,
  current: 1
}

const canPlay = () => round.current < round.total ? true : false

// A function to start the game
const playGame = () => {
  showRounds.textContent = `Round: ${round.current} of ${round.total}`

  choices.appendChild(rock);
  choices.appendChild(paper);
  choices.appendChild(scissor);

  computerlabel.textContent = "Computer";
  playerlabel.textContent = "Player";

  rock.addEventListener("click", (e) => playRound(e.target.id));
  paper.addEventListener("click", (e) => playRound(e.target.id));
  scissor.addEventListener("click", (e) => playRound(e.target.id));

  updateScore(score.player, score.computer);
}

// A function that will run every round
// compare the player and computer choice
// and return the result
const playRound = (player = "") => {
  if (canPlay()) {
    // convert number into rock, paper or scissor before comparing it with the player input
    let computer = getComputerChoice()
    computer = computer === 1 ? "rock" : computer === 2 ? "paper" : "scissor";

    playerChoice.textContent = player;
    computerChoice.textContent = computer;

    if (player === "rock") {
      if (computer === "paper") {
        score.computer++
        updateScore(score.player, score.computer);
        updateRoundResult('Lose', 'Win')
      } else if (computer === "scissor") {
        score.player++
        updateScore(score.player, score.computer);
        updateRoundResult('Win', 'Lose');
      } else {
        updateRoundResult('Draw', 'Draw');
      }
    }
    if (player === "paper") {
      if (computer === "scissor") {
        score.computer++
        updateScore(score.player, score.computer);
        updateRoundResult('Lose', 'Win')
      } else if (computer === "rock") {
        score.player++
        updateScore(score.player, score.computer);
        updateRoundResult('Win', 'Lose');
      } else {
        updateRoundResult('Draw', 'Draw');
      }
    }
    if (player === "scissor") {
      if (computer === "rock") {
        score.computer++
        updateScore(score.player, score.computer);
        updateRoundResult('Lose', 'Win')
      } else if (computer === "paper") {
        score.player++
        updateScore(score.player, score.computer);
        updateRoundResult('Win', 'Lose');
      } else {
        updateRoundResult('Draw', 'Draw');
      }
    }

    round.current++;
    showRounds.textContent = `Round: ${round.current} of ${round.total}`

    !canPlay() && showWinner();
  }
}

const showWinner = () => {
  if (score.player > score.computer) {
    winner.textContent = `Congratulations, You win this game!\n\nFinal score:\nPlayer: ${score.player}  | Computer: ${score.computer}`
  } else {
    winner.textContent = `Computer won this game!\n\nFinal score:\nPlayer : ${score.player} | Computer: ${score.computer}`
  }
}

startGame.addEventListener("click", playGame)