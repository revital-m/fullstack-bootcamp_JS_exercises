function reverseStr1(arr) {
  return arr.reverse();
}

function reverseStr2(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    let start = arr[i];
    let end = arr[arr.length - 1 - i];
    arr[i] = end;
    arr[arr.length - 1 - i] = start;
  }
  return arr;
}

function reverseStr3(str) {
  return str ? reverseStr3(str.substr(1)) + str[0] : str;
}

let str1 = reverseStr1(["h", "e", "l", "l", "o"]);
let str2 = reverseStr2(["h", "e", "l", "l", "o"]);
let myStr = ["h", "e", "l", "l", "o"].join('');
let str3 = reverseStr3(myStr);

console.log(`str1 =`, str1, `str2 =`, str2, `str3 =`, str3);
