const numArr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

//* Q-1
let maxNum =  numArr.reduce((max, currVal) => (Math.max(max,currVal)));

console.log(`maxNum = `,maxNum);

//* Q-2
let sumOfEven =  numArr.reduce((totalEven, currVal) => {
    if (currVal%2 === 0) {
        totalEven += currVal;
    }
    return totalEven;
},0);

console.log(`sumOfEven = `,sumOfEven);

//* Q-3
function averageOfNums(arr){
    let totalNums =  arr.reduce((total, currVal) => (total += currVal));
    let averageToatl = (totalNums/arr.length);
    return averageToatl;
}

let average = averageOfNums(numArr);
console.log(`average = `,average);