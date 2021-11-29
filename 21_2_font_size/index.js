let textToChange = document.querySelector('p');
let plusBtn = document.querySelector('#plusBtn');
let minusBtn = document.querySelector('#minusBtn');

let fontSize = 20;

plusBtn.addEventListener('click', (el) => {
    if (fontSize < 100) {
        fontSize++;
    }
    textToChange.style.fontSize = `${fontSize}px`;
});

minusBtn.addEventListener('click', (el) => {
    if (fontSize > 6) {
        fontSize--;
    }
    textToChange.style.fontSize = `${fontSize}px`;
});

