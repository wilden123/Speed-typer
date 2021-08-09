// add listener to the window for when the page loads
window.addEventListener("load", init);

// Available levels
const levels = {
  easy: 5,
  medium: 3,
  hard: 1,
};

const currentLevel = levels.easy;

let time = currentLevel;
let score = 0;
let isPlaying;
let keepPlaying;

const wordInput = document.querySelector("#word-input");
const currentWord = document.querySelector("#current-word");
const scoreDisplay = document.querySelector("#score");
const timeDisplay = document.querySelector("#time");
const message = document.querySelector("#message");
const seconds = document.querySelector("#seconds");
const mainCont = document.querySelector(".container");
const level = document.getElementById("levels");
const mainBody = document.querySelector("body");
const highScore = document.getElementById("highscore");

const words = [
  "learn",

  "line",
  "oatmeal",
  "fail",
  "edge",
  "tooth",

  "mine",

  "badly",
  "flat",

  "harm",

  "nasty",

  "road",

  "prepare",

  "page",
  "hot",
];

// Initialize Game
function init() {
  //show number of seconds in UI
  seconds.innerHTML = currentLevel;
  // Load word from array
  showWord(words);
  // Start matching on word input
  //wordInput.addEventListener("input", startMatch);
  // Call countdown every second
  setInterval(countdown, 1000);
  // Chech game status
  setInterval(checkStatus, 50);
}
// Start Match
// function startMatch() {
//   if (keepPlaying) {
//     isPlaying = true;

//     time = currentLevel + 1;
//     showWord(words);
//     wordInput.value = "";
//     score++;
//   }

//   // if score is -1 display 0
//   if (score === -1) {
//     scoreDisplay.innerHTML = 0;
//   } else {
//     scoreDisplay.innerHTML = score;
//   }
// }

// function matchWords() {
//     if (wordInput.value === currentWord.innerHTML) {
//       message.innerHTML = "Correct!";
//       mainBody.className = "bg-success";
//       //mainCont.style.backgroundColor = "green";
//       return true;
//     } else {
//       message.innerHTML = "False";
//       mainBody.className = "bg-danger";
//       return false;
//     }
//   }

//Match currentWord to the word Input
wordInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    if (wordInput.value === currentWord.innerHTML) {
      message.innerHTML = "Correct!";
      mainBody.className = "bg-success";
      showWord(words);
      time = 5;
      wordInput.value = "";
      isPlaying = true;
      score++;

      if (level.value === "Easy") {
        time = 5;
        seconds.innerHTML = 5;
      } else if (level.value === "Medium") {
        time = 3;
        seconds.innerHTML = 3;
      } else if (level.value === "Hard") {
        time = 1;
        seconds.innerHTML = 1;
      }

      if (score === -1) {
        scoreDisplay.innerHTML = 0;
      } else {
        scoreDisplay.innerHTML = score;
      }

      return (keepPlaying = true);
    } else {
      message.innerHTML = "False";
      mainBody.className = "bg-danger";

      return (keepPlaying = false);
    }
  }
});

// Pick and show random word
function showWord(words) {
  // Generate random array index
  const randIndex = Math.floor(Math.random() * words.length);
  // Output random word
  currentWord.innerHTML = words[randIndex];
}

// Countdown timer
function countdown() {
  // chech if time not run out
  if (time > 0) {
    // Decrease time
    time--;
  } else if (time === 0) {
    isPlaying = false;
  }
  // Show time
  timeDisplay.innerHTML = time;
}

// Check game status
function checkStatus() {
  if (!isPlaying && time === 0) {
    message.innerHTML = "Game Over!";
    mainBody.className = "bg-danger";
    score = -1;
  }
}
// To make it better:
//Have users select the level they want.
// Add local storage to save the score and possibly the high score.
// fetch words form api
// change color to green when is correct and red if incorrect. Make it reset when the game starts again
// style the UI better
