//? Block-1
/*function funcA() {
  console.log(a);
  console.log(foo());
  var a = 1;
  function foo() {
    return 2;
  }
}
funcA();*/

//* line 3 will be undefined. to fix it we need to declare var a before we console.log it.
//* line 4 will be 2.

//? Block-2
/*var fullName = "John Doe";
var obj = {
  fullName: "Colin Ihrig",
  prop: {
    fullName: "Aurelio De Rosa",
    getFullName: function () {
      return this.fullName;
    },
  },
};
console.log(obj.prop.getFullName());
var test = obj.prop.getFullName;
console.log(test());*/

//* line 26 will be "Aurelio De Rosa".
//* line 28 will be  undefined. to fix it: 
//*     var test = obj.prop.getFullName(); 
//*     console.log(test);
//* this is because -test- is not a function but -getFullName- is a function and in order to call it correctly we need to add () so the computer will know to run it.

//? Block-3
/*function funcB() {
  let a = (b = 0);
  a++;
  return a;
}
funcB();
console.log(typeof a);
console.log(typeof b);*/

//* line 40 will be undefined. to fix it we need to declare let b before we give it's value to a. Because as it is written now, b is a global variable.
//* line 41 will be number.

//? Block-4
/*function funcC() {
  console.log("1");
}
funcC();
function funcC() {
  console.log("2");
}
funcC();*/

//* line 48 will be 2, the last funcC() will overwrite the first one.
//* line 52 will be 2.

//? Block-5
/* function funcD1() {
  d = 1;
}
funcD1();
console.log(d);
function funcD2() {
  var e = 1;
}
funcD2();
console.log(e);*/

//* line 64 will be 1. d is a global variable.
//* line 69 will be undefined. you can't access a local variable outside his block.

//? Block-6
/*function funcE() {
  console.log("Value of f in local scope: ", f);
}
console.log("Value of f in global scope: ", f);
var f = 1;
funcE();*/

//* line 77 will be "Value of f in global scope: 1".
//* line 79 will be "Value of f in global scope: undefined". to fix it we need to declare var f before we console.log it.