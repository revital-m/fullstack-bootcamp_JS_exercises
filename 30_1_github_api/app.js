const inputText = document.querySelector(".inputText");
let userInput = "";
const searchBtn = document.querySelector(".btn");
const cardsContainer = document.querySelector(".cards-container");
const errText = document.querySelector("#errMsg");

const usersArr = [];

window.addEventListener('load', () => {
    inputText.focus();
});

searchBtn.addEventListener("click", (e) => {
    userInput = inputText.value;
    inputText.value = "";
  if (userInput !== "") {
    newUser();
  }
});
inputText.addEventListener("keypress", (e) => {
    if (!errText.classList.contains('hiddenText')) {
        errText.classList.add('hiddenText');
    }
    userInput = inputText.value;
  if (e.key === "Enter" && userInput !== "") {
    inputText.value = "";
    newUser();
  }
});

async function newUser() { 
    try {
        const res = await fetch(`https://api.github.com/users/${userInput}`);
        const data = await res.json();
        if (res.ok) {
            newCard(data);
        }
        else {
            errMsg(`'${userInput}' is an invalid username!`);
        }
    } 
    catch(e) {
        errMsg(err);
    }
}

function newCard(data){
    if (!usersArr.includes(`${userInput}`)) {
        usersArr.push(userInput);

          const avatarImageUrl = data.avatar_url;
          const NumOfPublicRepo = data.public_repos;
          const userUrl = data.html_url;

          const newCard = document.createElement("a");
          newCard.classList.add("card");
          newCard.setAttribute("href", `${userUrl}`);
          newCard.setAttribute("target", `_blank`);

          const newImg = document.createElement("img");
          newImg.setAttribute("src", avatarImageUrl);
          newCard.appendChild(newImg);

          const newTitle = document.createElement("h2");
          newTitle.innerText = userInput;
          newCard.appendChild(newTitle);

          const newP = document.createElement("p");
          newP.innerText = `Number of public repo’s: ${NumOfPublicRepo}`;
          newCard.appendChild(newP);

          cardsContainer.appendChild(newCard);
    }
}

function errMsg(msg) {
    errText.innerText = `Error- ${msg}`;
    errText.classList.remove('hiddenText');
}
