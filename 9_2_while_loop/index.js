let myArrInput = ["boo", "doooo", "hoo","ro"];

function wordsLength(arr){
    let myArrOutput = [];
    let i = 0;
    while (i < arr.length) {
        myArrOutput.push(arr[i].length);
        i++;
    }
    return myArrOutput;
}

let myArrOutput = wordsLength(myArrInput);
console.log(myArrOutput);