let myIntArr = [1,2,3,4,5,6,7,8,9,10,11,12,13];
let myStrArr = [1, 2, 'dog', 'cat', 'phone', 'Israel', 'pool', 'music',3,4];
let myStr = 'this is a string that includs lots of vowels.';

//* Q-1
function doubleValues(arr){
    return arr.map(function(num){
        return num*2;
    });
}

let doubleValuesArr = doubleValues(myIntArr);
console.log(`doubleValuesArr = [${doubleValuesArr}]`);

//* Q-2
function onlyEvenValues(arr){
    let newArr = [];
    arr.forEach(element => {
        if (element%2 === 0) {
            newArr.push(element);
        }
    });
    return newArr;
}

let evenValuesArr = onlyEvenValues(myIntArr);
console.log(`evenValuesArr = [${evenValuesArr}]`);

//* Q-3
function showFirstAndLast(arr){
    let newArr = [];
    let resArr = [];
    arr.forEach(element => {
        if (typeof element === 'string') {
            newArr.push(element);
        }
    });
    if (newArr.length === 1) {
        resArr.push(newArr[0]);
    }
    else if (newArr.length > 1) {
        resArr.push(newArr[0], newArr[newArr.length-1]);
    }
    return resArr;
}

let firstLastArr = showFirstAndLast(myStrArr);
console.log(`firstLastArr = [${firstLastArr}]`);

//* Q-4
//! A E I O U
function vowelCount(str){
    let myVowelObj = {a:0,e:0,i:0,o:0,u:0,};
    str.toLowerCase().split('').forEach(element => {
        switch (element) {
            case 'a':
                myVowelObj.a++;
                break;
            case 'e':
                myVowelObj.e++;
                break;
            case 'i':
                myVowelObj.i++;
                break;
            case 'o':
                myVowelObj.o++;
                break;
            case 'u':
                myVowelObj.u++;
                break;
        }
    });
    return myVowelObj;
}

let vowelCountArr = vowelCount(myStr);
console.log(`vowelCountArr = `,vowelCountArr);

//* Q-5
function capitalize(str){
    return str.toUpperCase();
}

let capitalizeStr = capitalize(myStr);
console.log(`capitalizeStr = `,capitalizeStr);

//* Q-6
function shiftLetters(str){
    let encodedStr = str.split('').map(function(char,idx){
        if (char !== ' ') {
            return String.fromCharCode(str.charCodeAt(idx)-1);
        }
        return char;
    });
    return encodedStr.join('')
}

let shiftLettersStr = shiftLetters(myStr);
console.log(`shiftLettersStr = `,shiftLettersStr);

//* Q-7
function swapCase(str){
    let swapCaseStr = str.split(' ').map(function(char,idx){
        if (idx%2 === 0) {
            return capitalize(char);
        }
        return char;
    });
    return swapCaseStr.join(' ')
}

let swapCaseStr = swapCase(myStr);
console.log(`swapCaseStr = `,swapCaseStr);