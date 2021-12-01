const checkbox = document.querySelector("input");
const image = document.querySelector("img");

checkbox.addEventListener("change", (e) => {
  if (checkbox.checked) {
    image.classList.remove('visibility-hidden');
  } else {
    image.classList.add('visibility-hidden');
  }
});
