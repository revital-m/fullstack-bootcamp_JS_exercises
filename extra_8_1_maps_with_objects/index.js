let myObj1 = {name: 'This is obj 1.'};
let myObj2 = {name: 'This is obj 2.'};
let myObj3 = {name: 'This is obj 3.'};

let myMap = new Map([[myObj1,1], [myObj2,2], [myObj3,3]]);
console.log(myMap);

for (const el of myMap) {
    console.log(`name = ${el[0].name}`, `id = ${el[1]}`);
}