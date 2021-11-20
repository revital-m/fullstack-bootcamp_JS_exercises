/*
function getSum(arr1, arr2) {
  const sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum += arr1[i];
  }
  for (let i = 0; i < arr2.length; i++) {
    sum += arr2[i];
  }
}
getSum([1, 2, 3][(5, 66, 23)]);
*/

//? Q-1
//* the problem was at lines 2 & 11.
//* const sum = 0;
//* getSum([1,2,3][5,66,23]);

//? Q-2
//* the debuger in chrome.

//? Q-3
//* in line 2: you can not change a const variable.
//* in line 11: forgot a comma between the two arrays.

//? Q-4
function getSum(arr1, arr2) {
  let sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum += arr1[i];
  }
  for (let i = 0; i < arr2.length; i++) {
    sum += arr2[i];
  }
  return sum;
}
console.log(getSum([1, 2, 3], [(5, 66, 23)]));
