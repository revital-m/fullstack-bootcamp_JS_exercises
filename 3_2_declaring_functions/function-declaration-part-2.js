/*
    JavaScript - Declaring Functions

    The following exercise contains the following subjects:
        * functions
    
    Instructions
        * Please reformat the following function expressions to IIFE functions.
        * Please reformat the following function declarations in two ways, explicit return and implicit return functions.

    Submit the file to Hive

*/

// From function declarations to explicit and implicit return functions (one of each).
/*function welcome() {
    let welcome = 'Welcome to Appleseeds Bootcamp!';
    return welcome;
}*/
const welcome = () => ('Welcome to Appleseeds Bootcamp!');
const welcome2 = () => {return 'Welcome to Appleseeds Bootcamp!'};
console.log(welcome());
console.log(welcome2());

/*function power(a) {
    let myNumber = a;
    let result = Math.pow(myNumber, 2);
    return result;
}*/
const power = (a) => (Math.pow(a, 2));
const power2 = (a) => {return Math.pow(a, 2)};
console.log(power(3));
console.log(power2(3));

// From function expressions to IIFE functions.
// const squareRoot = a => Math.sqrt(a);
(function squareRoot(a) {
    console.log(Math.sqrt(a));
})(16); 

// const randomNumbers = (a, b) => Math.random() * (a - b) + b;
(function randomNumbers(a, b) {
    console.log(Math.random() * (a - b) + b);
})(2,1);