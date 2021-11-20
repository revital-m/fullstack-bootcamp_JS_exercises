/*
function findSmallest(a, b, c) {
  if (a > b > c) {
    return c;
  } else if (a > c > b) {
    return a;
  } else {
    return b;
  }
}
findSmalest(52, 66, 2);
*/

//? Q-1
//* the problem was at line 11.
//* findSmalest(52, 66, 2);

//? Q-2
//* the debuger in chrome.

//? Q-3
//* in line 11: misspelled the name of the function.

//? Q-4
function findSmallest(a, b, c) {
  if (a > b > c) {
    return c;
  } else if (a > c > b) {
    return a;
  } else {
    return b;
  }
}
console.log(findSmallest(52, 66, 2));
