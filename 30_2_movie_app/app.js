const inputText = document.querySelector(".inputText");
let movieName = "";
const searchBtn = document.querySelector(".btn");
const moviesContainer = document.querySelector(".movies-container");
const errText = document.querySelector("#errMsg");

window.addEventListener("load", () => {
  inputText.focus();
});

searchBtn.addEventListener("click", (e) => {
  movieName = inputText.value;
  inputText.value = "";
  if (movieName !== "") {
    moviesContainer.innerHTML = "";
    newMovie();
  }
});
inputText.addEventListener("keypress", (e) => {
  if (!errText.classList.contains("hiddenText")) {
    errText.classList.add("hiddenText");
  }
  movieName = inputText.value;
  if (e.key === "Enter" && movieName !== "") {
    inputText.value = "";
    moviesContainer.innerHTML = "";
    newMovie();
  }
});

async function newMovie() {
  try {
    const res = await fetch(
      `http://www.omdbapi.com/?apikey=3f79b90b&t=${movieName}`
    );
    const data = await res.json();
    if (res.ok) {
      createMovie(data);
    } else {
      throw new Error(data.message);
    }
  } catch (e) {
    errMsg(e);
  }
}

function createMovie({
  Poster,
  Title,
  Genre,
  Year,
  Plot,
  Director,
  Actors,
  Ratings,
}) {
  const infoObj = { Genre, Year, Plot, Director, Actors };
  const RatingIconsArr = [
    "./img/icons8-imdb-48.png",
    "./img/rotten-tomatoes-logo.png",
    "./img/metacritic-icon.png",
  ];

  const newMovieCard = document.createElement("div");
  newMovieCard.classList.add("movie");

  const newPoster = document.createElement("img");
  newPoster.setAttribute("src", Poster);
  newMovieCard.appendChild(newPoster);

  const newMovieInfo = document.createElement("div");
  newMovieInfo.classList.add("movieInfo");

  const newTitle = document.createElement("h1");
  newTitle.innerText = `${Title}`;
  newMovieInfo.appendChild(newTitle);

  const newList = document.createElement("ul");
  for (const key in infoObj) {
    const newListItem = document.createElement("li");
    const itemKey = document.createElement("p");
    itemKey.classList.add("listKey");
    itemKey.innerText = `${key}:`;

    const itemValue = document.createElement("p");
    itemValue.classList.add("listValue");
    itemValue.innerText = `${infoObj[key]}`;

    newListItem.appendChild(itemKey);
    newListItem.appendChild(itemValue);
    newList.appendChild(newListItem);
  }
  newMovieInfo.appendChild(newList);

  const newRatings = document.createElement("div");
  newRatings.classList.add("ratings");
  let idx = 0;
  Ratings.forEach((element) => {
    const newRatingInfo = document.createElement("div");
    newRatingInfo.classList.add("ratingsInfo");

    const newRatingImg = document.createElement("img");
    newRatingImg.setAttribute(`src`, RatingIconsArr[idx]);
    newRatingImg.setAttribute(`alt`, `${element.Source}`);
    newRatingInfo.appendChild(newRatingImg);
    const newRatingItem = document.createElement("p");
    newRatingItem.innerText = ` ${element.Value}`;
    newRatingInfo.appendChild(newRatingItem);
    newRatings.appendChild(newRatingInfo);
    idx++;
  });
  newMovieInfo.appendChild(newRatings);

  newMovieCard.appendChild(newMovieInfo);
  moviesContainer.appendChild(newMovieCard);
}

function errMsg(msg) {
  errText.innerText = `${msg}`;
  errText.classList.remove("hiddenText");
}
