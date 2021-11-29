const userInputs = document.querySelectorAll('input');

userInputs.forEach((input,idx) => {
    input.addEventListener('paste', (event) => {
        const txt = event.clipboardData.getData('text');
        const txtArr = txt.split('');
        for (let i = 0; i < txtArr.length; i++) {
            userInputs[idx + i].value = txtArr[i];
        }
    });

    input.addEventListener('keyup', () => {
        if (input.nextElementSibling && input.value) {
            input.nextElementSibling.focus();
        }
    });
});