const smileys = document.querySelector(".smileys");
const userNum = document.querySelector("input");
const btn = document.querySelector("button");

userNum.addEventListener('keydown', () => {
    const deletSmileys = document.querySelectorAll('i');
    deletSmileys.forEach(el => {
        el.remove();
    });
});

btn.addEventListener("click", () => {
  let isValidNum = checkInput(userNum.value);
  if (isValidNum) {
    addSmiley(Math.floor(userNum.value));
  }
});

function checkInput(num) {
  const errMsg = document.querySelector(".errMsg");
  if (!isNaN(num)) {
    errMsg.style.visibility = "hidden";
    return true;
  } else {
    errMsg.style.visibility = "visible";
    return false;
  }
}

function addSmiley(num) {
  for (let i = 0; i < num; i++) {
    const smiley = document.createElement("i");
    smiley.classList.add("far", "fa-smile-beam");
    smileys.appendChild(smiley);
  }
}
