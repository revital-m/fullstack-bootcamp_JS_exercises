/*
function calcAverage(arr) {
  var sum;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
calcAverage([85, 90, 92]);
*/

//? Q-1
//* the problem was at line 3.
//* var sum;

//? Q-2
//* the debuger in chrome.

//? Q-3
//* in line 3: sum is undefined, there for in line 5 we try to add a number to undefined and that gives us NaN.

//? Q-4
function calcAverage(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(calcAverage([85, 90, 92]));
