/*
function getSumOfEven(arr) {
  return arr[2] + arr[4] + arr[6] + arr[8] + arr[10];
}
getSumOfEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
*/

//? Q-1
//* the problem was at line 3.
//* return arr[2] + arr[4] + arr[6] + arr[8] + arr[10];

//? Q-2
//* the debuger in chrome.

//? Q-3
//* in line 3: indexs in array start at 0, there for arr[10] does not exist, and all the indexs should be -1 of what is currently written.

//? Q-4
function getSumOfEven(arr) {
  return arr[1] + arr[3] + arr[5] + arr[7] + arr[9];
}
console.log(getSumOfEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
