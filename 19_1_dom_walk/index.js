const startHere = document.querySelector(".start-here");
startHere.innerText = "main title";

const uls = document.querySelectorAll("ul");
const newSub = document.createElement("li");
newSub.innerText = "sub title 4";
uls[1].appendChild(newSub);

const lis = document.querySelectorAll("li");
lis[lis.length - 1].remove();

const title = document.querySelector("title");
title.innerText = "Master Of The Dom";

const txt = document.querySelector("p");
txt.innerText = "ex 19.1 -dom walk, is done!";
