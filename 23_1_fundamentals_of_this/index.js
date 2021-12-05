/**
 * Question 1:
 * In your own words what will this point to and why?(Note this is the global scope)
 * console.log(this);
 *
 * Answer:
 * 'this' will point to Window.
 */

/**
 * Question 2:
 * a. In your own words what will this point to and why.
 * b. How can you fix this code.
 *  const myObj = {
 *      name: "Timmy",
 *      greet: () => {
 *          console.log(`Hello ${this.name}`);
 *      },
 *  };
 *  myObj.greet();
 *
 * Answer:
 * a. 'this' will point to Window because an arrow function doesn't change 'this'.
 * b.
 *  const myObj = {
 *      name: "Timmy",
 *      greet: function (){
 *          console.log(`Hello ${this.name}`);
 *      },
 *  };
 *  myObj.greet();
 */

/**
 * Question 3:
 * In your own words what will this point to and why?
 *  const myFuncDec = function () {
 *      console.log(this);
 *  };
 *
 * Answer:
 * 'this' will point to Window because this is a global function.
 */

/**
 * Question 4:
 * In your own words what will this point to and why?
 *  const myFuncArrow = () => {
 *      console.log(this);
 *  };
 *  myFuncArrow();
 *
 * Answer:
 * 'this' will point to Window because this is an arrow function.
 */

/**
 * Question 5:
 *  a. In your own words what will this point to and why.
 *  b. How can you fix this code.
 *      document.querySelector(".element").addEventListener(() => {
 *          console.log(this);
 *      });
 *
 * Answer:
 *  a. 'this' will point to Window because this is an arrow function.
 *  b.  
 *      document.querySelector(".element").addEventListener(function (){
 *          console.log(this);
 *      });
 */
