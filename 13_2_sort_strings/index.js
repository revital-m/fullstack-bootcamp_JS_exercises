const foods = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];
const foodsWithUpperCase = [
  "falafel", "Sabich", "hummus", "pizza with extra pineapple",
];
const words = ["apple", "supercalifragilisticexpialidocious", "hi", "zoo"];

//* Q-a-1
let descendingStrs = foods.slice().sort().reverse();

//* Q-a-2
let ascendingStrs = foods.slice().sort();

console.log("descendingStrs = ", descendingStrs);
console.log("ascendingStrs = ", ascendingStrs);


//* Q-b-1
let descendingStrsUpper = foodsWithUpperCase.slice().join(',').toLowerCase().split(',').sort().reverse();

//* Q-b-2
let ascendingStrsUpper = foodsWithUpperCase.slice().join(',').toLowerCase().split(',').sort();

console.log("descendingStrsUpper = ", descendingStrsUpper);
console.log("ascendingStrsUpper = ", ascendingStrsUpper);


//* Q-c-1
let longestStrs = words.slice().sort((a,b) => (b.length - a.length))

console.log("longestStrs = ", longestStrs);
