/*
--Delete the wrong answers--

1. Which of the following is/are strings?

c) '4'

2. Which of the following is/are numbers?

a) 4
b) 4.0
d) -4

3. Which of the following is/are booleans?

a) true
b) false

4. What is the result of 80 + 71.2?

a) 151.2

5. What is the result of "80" + 71.2?

c) "8071.2"

6. Does 100 + 30 produce a number or a string?

a) number

7. Does "100" + 30 produce a number or a string?

b)string

*/

//------Submit your answers under the question------//

//create three different ways to declare variables
var myVar = 20;
let mylet = 20;
const myconst = 20;

//declare a variable and reassign a value to it
let srt = "befor reassign";
console.log(srt);
srt = "after reassign";
console.log(srt);
//create a variable and after that assign a string with its value being: He's got it!
let myVariable = 20;
console.log(myVariable);
myVariable = "He's got it!";
console.log(myVariable);

/*
1. create a variable and assign a value on how much a restaurant bill is.
2. create a variable and assign a value on how much tax they should pay.
3. create a variable that will calculate the bill * tax and its output would be: Your total bill is <total bill> $.
 */
let bill = 50;
let tax = 1.17;
let totalBill = `Your total bill is ${bill * tax}`;
console.log(totalBill);

// Round the number 50.6 to its nearest integer
let num = 50.6;
console.log(Math.floor(num));

//Create a variable that is undefined
let myUndefinedVar;
console.log(typeof myUndefinedVar);