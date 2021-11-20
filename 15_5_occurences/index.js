/*
function countOccurrences(str, char) {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === char) {
      counter + 1;
    }
  }
  return counter;
}
countOccurrences("ini mini miny moe", "n");
*/

//? Q-1
//* the problem was at line 6.
//* counter + 1;

//? Q-2
//* the debuger in chrome.

//? Q-3
//* in line 6: without '=' we do not allocate a new value to counter.

//? Q-4
function countOccurrences(str, char) {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === char) {
      counter += 1;
    }
  }
  return counter;
}
console.log(countOccurrences("ini mini miny moe", "n"));
