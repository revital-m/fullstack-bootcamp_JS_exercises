let myArr = new Array(100);
let myArr2 = [];
let myObj = {
    var1: 1,
    var2: 2,
    var3: 3,
    var4: 4
};

//? #1
myArr.fill(myObj);
console.log(myArr);

//? #2
let myArrFrom = new Array(100);
myArr2 = Array.from(Array(101).keys());
myArr2.shift();
console.log(myArr2);

//? #3
let myObjValues = Object.values(myObj);
console.log(myObjValues);

//? #4
let myObj2 = Object.assign({}, myArr2);
console.log(myObj2);

//? #5
console.log(Array.isArray(myArr));

//? #6-1
let myArr3 = myArr2.slice(0);
myArr3.push('hello');
myArr3.shift();
console.log(myArr3);
console.log(myArr2);

//? #6-2
let myArr4 = myArr2;
myArr4.push('hello');
myArr4.shift();

console.log(myArr4);
console.log(myArr2);
