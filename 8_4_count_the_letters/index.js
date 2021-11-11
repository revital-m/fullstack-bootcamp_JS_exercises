const array = ["Hello", "Good Day", "Your Welcome", "hotdog",
"hamburgers"];

function countLettersInArr(array){

    let str = array.toString().toLowerCase();
    const numLetterInArr = {};
    let count;
    let maxCount = 0;
    let mostOccurrences;
    
    for (let i = 0; i < str.length; i++) {

        count = 0;
        for (let j = 0; j < str.length; j++) {
            if (str[j] === str[i]) {
                count++;
            }    
        }
        if (str[i] !== " " && str[i] !== ",") {
            numLetterInArr[str[i]] = count;
            if (maxCount < count) {
                maxCount = count;
                mostOccurrences = str[i];
            }
        }
    }
    numLetterInArr.mostOccurrences = mostOccurrences;
    return numLetterInArr;
}

const numLetterInArr = countLettersInArr(array);
console.log(numLetterInArr);

const exemple = { h: 3, e: 4, l: 3, o: 7, g: 3, d: 3, a: 2, y: 2, u: 2, r: 3, w: 1, c: 1, m: 2, t: 1, b: 1, s: 1 };
console.log(exemple);
