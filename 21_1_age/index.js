let age = document.querySelector('input[type="text"]');
let btn = document.querySelector('input[type="submit"]');



age.addEventListener('keyup',(el) => {
    btn.addEventListener('click', (userAge) => {
        if (age.value >= 18) {
            age.value= 'you can drink';
            console.log("you can drink");
        }
    });
    btn.addEventListener('click', (age) => {
        if (age.value < 18) {
            age.value= "you’re too young";
            console.log("you’re too young");
        }
    });
});

// console.dir(age);