const numbers = [1, -5, 666, 2, 400, 11];

//* Q-1
let descendingNums = numbers.slice().sort((a,b) => (b - a));

//* Q-2
let ascendingNums = numbers.slice().sort((a,b) => (a - b));

console.log('descendingNums = ',descendingNums);
console.log('ascendingNums = ',ascendingNums);