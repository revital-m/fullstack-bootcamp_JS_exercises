//! variables
const strAZ = "abcdefghijklmnopqrstuvwxyz";
const lettersArr = [];
let chosenLetter = '';
let isGameOver = false;

const msg = document.querySelector(".msg");
const lettersContainer = document.querySelector(".keys-container");
const letterBox = document.querySelector(".chosen-letter");
const bottomTitle = document.querySelector(".bottom-title");
const btn = document.querySelector(".btn");

//! functions:
// return a random index between 0 and 25.
const randomLetter = () => Math.floor(Math.random() * 26);

// check if keyValue is a letter a-z. return true or false.
function isValid(keyValue) {
  const isLetter = /^[a-zA-Z]+$/.test(keyValue);
  if (isLetter && keyValue.length === 1) {
    return true;
  }
  errMsg(false, false, true, keyValue);
  return false;
}

// change msg innerText to diffrent text in red.
function errMsg(worngLetter, alredyGuessed, invalid, keyValue) {
  msg.classList.add("msg-red");
  if (worngLetter) {
    msg.innerText = "Nope, worng letter";
  } else if (alredyGuessed) {
    msg.innerText = `${keyValue} has already been guessed!`;
  } else if (invalid) {
    msg.innerText = `please enter a valid letter`;
  }
}

// check if the letter has already been guessed. return true or false.
function isGuessedAlredy(keyValue) {
  if (lettersArr.includes(keyValue)) {
    errMsg(false, true, false, keyValue);
    return true;
  }
  return false;
}

// wrong guess. add the letter to lettersArr and to lettersContainer.
function wrongGuess(keyValue) {

  //*add the letter to lettersContainer.
  const wrongLetter = document.createElement("p");
  wrongLetter.classList.add("oneKey");
  if (lettersArr.length) {
    wrongLetter.innerText = `, ${keyValue}`;
  } else {
    wrongLetter.innerText = `${keyValue}`;
  }
  lettersContainer.appendChild(wrongLetter);

  //*add the letter to lettersArr as key.
  lettersArr.push(keyValue);
}

// right guess. changes msg to green congratulations message, the question mark into chosenLetter, and bottom-title into wnat a new game? , changes btn to visible.
function rightGuess() {
  letterBox.innerText = `${chosenLetter}`;
  msg.classList.remove("msg-red");
  msg.classList.add("msg-green");
  msg.innerText = "Right letter!";
  bottomTitle.innerText = "Would you like to play again?";
  lettersContainer.classList.add('display-none');
  btn.classList.remove('display-none');
  isGameOver = true;
}

// reset game
function resetGame() {
  letterBox.innerText = `?`;
  msg.classList.remove("msg-green");
  msg.innerText = "Guess a letter";
  bottomTitle.innerText = "Keys guessed";
  lettersContainer.classList.remove('display-none');
  btn.classList.add('display-none');

  //* remove all the letters from lettersContainer.
  const keysReset = document.querySelectorAll(".oneKey");
  keysReset.forEach((letter) => {
    lettersContainer.removeChild(letter);
  });

  //* remove all the letters from lettersArr.
  while (lettersArr.length) {
    lettersArr.pop(); 
  }
  
  chosenLetter = strAZ[randomLetter()];
  isGameOver = false;
}



//! calling functions:
chosenLetter = strAZ[randomLetter()];

window.addEventListener("keypress", (e) => {
  if (!isGameOver) {
    const isValidLetter = isValid(e.key);
    if (isValidLetter) {
      const userGuess = e.key.toLowerCase();
      if (!isGuessedAlredy(userGuess)) {
        if (userGuess === chosenLetter) {
          rightGuess();
        } else {
          errMsg(true, false, false, userGuess);
          wrongGuess(userGuess);
        }
      }
    }
  }
});

btn.addEventListener("click", (e) => {
  resetGame();
});