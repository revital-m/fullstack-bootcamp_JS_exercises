const lightbulb = document.querySelector('#lightbulb');

lightbulb.addEventListener('click',()=>{
    if (lightbulb.style.color === 'black') {
        lightbulb.style.color = 'yellow';
    }
    else {
        lightbulb.style.color = 'black';
    }
});