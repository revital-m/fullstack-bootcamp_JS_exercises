const firstPlayer = document.querySelector("#player1-race");
const secondPlayer = document.querySelector("#player2-race");
const winner = document.querySelector("#winner");
const resetBtn = document.querySelector("#reset");
let currPosition1 = 0;
let currPosition2 = 0;
let gameOver = false;

document.addEventListener("keydown", (e) => {
  let userKey = e.key;

  //Player 1
  if (userKey === "ArrowUp") {
    if (currPosition1 >= firstPlayer.children.length) {
      return;
    }
    if (!gameOver) {
      firstPlayer.children[currPosition1].classList.remove("active");
      currPosition1++;
      firstPlayer.children[currPosition1].classList.add("active");
    }
    if (firstPlayer.children[currPosition1].classList.contains("finish")) {
      winner.innerText = "Player 1 Wins!";
      gameOver = true;
      return;
    }
  }

  //Player2
  if (userKey === "ArrowDown") {
    if (currPosition2 >= secondPlayer.children.length) {
      return;
    }
    if (!gameOver) {
      secondPlayer.children[currPosition2].classList.remove("active");
      currPosition2++;
      secondPlayer.children[currPosition2].classList.add("active");
    }
    if (secondPlayer.children[currPosition2].classList.contains("finish")) {
      winner.innerText = "Player 2 Wins!";
      gameOver = true;
      return;
    }
  }
});

//Reset Function
resetBtn.addEventListener("click", (e) => {
  firstPlayer.children[currPosition1].classList.remove("active");
  firstPlayer.children[0].classList.add("active");
  secondPlayer.children[currPosition2].classList.remove("active");
  secondPlayer.children[0].classList.add("active");
  currPosition1 = 0;
  currPosition2 = 0;
  gameOver = false;
  winner.innerText = "";
});
