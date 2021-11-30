const submitForm = document.querySelector("form");
const userName = document.querySelector("#user-name");
const userAge = document.querySelector("#user-age");
const userEmail = document.querySelector("#user-email");
const confirmation = document.querySelector("#confirmation");
const change = document.querySelector("#change");
const txt = document.querySelector("#txt");
const container = document.querySelector(".container");

submitForm.addEventListener("submit", (event) => {
  const name = document.querySelector("#name");
  const age = document.querySelector("#age");
  const email = document.querySelector("#email");
  
  submitForm.classList.add('display-none');
  container.classList.remove('display-none');

  if (!(name.value && age.value && email.value)) {
    txt.innerText = "you must enter all fileds!";
  } else {
    userName.innerText = `name: ${name.value}`;
    userAge.innerText = `age: ${age.value}`;
    userEmail.innerText = `email: ${email.value}`;
  }

  event.preventDefault();
});

confirmation.addEventListener('click', () => {
    txt.innerText = "congratulations you successfully sent this form";
    userName.innerText = ``;
    userAge.innerText = ``;
    userEmail.innerText = ``;
    change.classList.add('display-none');
    confirmation.classList.add('display-none');
});

change.addEventListener('click', () => {
    submitForm.classList.remove('display-none');
    container.classList.add('display-none');
});
