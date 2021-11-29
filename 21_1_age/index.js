let age = document.querySelector('input[type="text"]');
let btn = document.querySelector('button');
let res = document.querySelector('.text');



age.addEventListener('keyup',(el) => {
    btn.addEventListener('click', (userAge) => {
        if (age.value >= '18') {
            res.innerText = 'you can drink';
            // age.value= 'you can drink';
            // console.log("you can drink");
        }
        else {
            // age.value= "you’re too young";
            res.innerText = 'you’re too young';
        }
    });
    btn.addEventListener('click', (userAge) => {
        if (age.value < '18') {
            res.innerText = 'you’re too young';
            // age.value= "you’re too young";
            // console.log("you’re too young");
        }
    });
});

// console.dir(age);