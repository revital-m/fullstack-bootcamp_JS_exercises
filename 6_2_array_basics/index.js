const people = ["Greg", "Mary", "Devon", "James"];

function myArrPrint(arr){
    console.log(`my array =`);
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
    return 0;
}

function myArrPrintMary(arr){
    console.log(`my array =`);
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
        if (arr[i] === 'Mary') {
            break;
        }
    }
    return 0;
}

myArrPrint(people);
people.shift();
myArrPrint(people);
people.pop();
myArrPrint(people);
people.unshift('Matt');
myArrPrint(people);
people.push('Revital');
myArrPrint(people);
myArrPrintMary(people);
console.log(people.slice(2));
console.log(people.indexOf('Mary'));
console.log(people.indexOf('Foo'));
people[0] = 'Greg';
people.pop();
people.pop();
people.push("Elizabeth", "Artie", "James");
myArrPrint(people);

let withBob = people;
withBob.push('Bob');
myArrPrint(withBob);