let myArrInput = ["boo", "doooo", "hoo","ro"];

function wordsLength(arr){
    let myArrOutput = [];
    for (let i = 0; i < arr.length; i++) {
        myArrOutput.push(arr[i].length);
    }
    return myArrOutput;
}

let myArrOutput = wordsLength(myArrInput);
console.log(myArrOutput);