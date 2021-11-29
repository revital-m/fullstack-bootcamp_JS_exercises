const btn = document.querySelector('.btn');
const userInput = document.querySelector('textarea');
const msg = document.querySelector('#msg');

btn.addEventListener('click', () => {
    if (userInput.value.length < 100) {
        msg.style.visibility = 'visible';
    }
    else {
        msg.style.visibility = 'hidden';
    }
});

