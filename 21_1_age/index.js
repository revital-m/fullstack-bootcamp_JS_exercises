const userAge = document.querySelector("input");
const txt = document.querySelector(".text");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  if (userAge.value < 18) {
    txt.innerText = "you’re too young";
  } else {
    txt.innerText = "you can drink";
    const cheers = document.createElement("i");
    cheers.classList.add("fas", "fa-glass-cheers");
    txt.appendChild(cheers);
  }
});
