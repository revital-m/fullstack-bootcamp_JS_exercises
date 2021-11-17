//? Block-1
/*
var b = 1;
function someFunction(number) {
  function otherFunction(input) {
    return b;
  }
  b = 5;
  return otherFunction;
}
var firstResult = someFunction(9);
var result = firstResult(2);
*/

//* the result will be 5. Nowhere in the functions -someFunction()- & -otherFunction()- we use -number- & -input- therefor -b- is affected first from line 3 where it is declared to be 1, and then in line 8 -b- is overwrite to be 5.

//? Block-2
/*
var a = 1;
function b2() {
  a = 10;
  return;
  function a() {}
}
b2();
console.log(a);
*/

//* the result will be 1. When we change -a- inside the function -b2()- we don't return this value. So when we exit this function everything we did is gone. We need to return -a- and either save it in a new variable or give the return value to -a-.

//? Block-3
/*
let i;
for (i = 0; i < 3; i++) {
  const log = () => {
    console.log(i);
  };
  setTimeout(log, 100);
}
*/

//* the result will be:
//*                     3
//*                     3
//*                     3
//* Because of -setTimeout(log, 100)- the function -log- will not be executed until 100 milliseconds will pass in each iteration of the loop, and by then the loop will be exited because -i- will be equal to 3. Because the function -log- prints -i- and by the time this will be printed -i- will be 3 it will print 3 for every iteration of the loop.