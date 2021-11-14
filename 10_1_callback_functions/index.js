function isString(str, func){
    if ((typeof str) === 'string') {
        return func(str);
    }
}

function printStr(str){
   return console.log(str);
}

function firstWordUpperCase(str, func){
    let myStr = '';
    for (let i = 0; i < str.indexOf(' '); i++) {
        myStr += str[i].toUpperCase();
    }
    myStr += str.slice(str.indexOf(' '));
    return console.log(func(myStr));
}

function addDashes(str){
    let myStr = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            myStr += '-';            
        }
        else {
            myStr += str[i];
        } 
    }
    return myStr;
}

function dasheAndUpperCase(str, func1, func2){
    let myStr = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            myStr += '-' + str[i+1].toUpperCase();
            i++;            
        }
        else {
            myStr += str[i];
        } 
    }
    return func1(myStr, func2);
}

let res1 = isString('This is a string', printStr);
let res2 = firstWordUpperCase('This is a string', addDashes);
let res3 = firstWordUpperCase('This is a string', printStr);
let res4 = dasheAndUpperCase('This is a string', isString, printStr);
