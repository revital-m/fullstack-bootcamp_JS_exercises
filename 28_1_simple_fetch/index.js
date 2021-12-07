const joke = document.querySelector("#joke");
const output = document.querySelector("#output");

joke.addEventListener("click", addJokes);

function addJokes() {
  fetch("https://api.jokes.one/jod")
    .then((res) => res.json())
    .then((data) => {
      const newH3 = document.createElement("h3");
      const newP = document.createElement("p");
      const title = data.contents.jokes[0].joke.title;
      const body = data.contents.jokes[0].joke.text;

      newH3.innerText = title;
      newP.innerText = body;

      output.appendChild(newH3);
      output.appendChild(newP);
    })
    .catch((err) => console.log("Error!", err));
}
