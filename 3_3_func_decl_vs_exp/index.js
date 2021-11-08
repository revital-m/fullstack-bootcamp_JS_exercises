function percentageOfWorld1(population){
    let res = Math.round((((population/7900)*100) + Number.EPSILON) * 100) / 100;
    return `${res} %`;
}

let china1 = percentageOfWorld1(1441);
let usa1 = percentageOfWorld1(333);
let israel1 = percentageOfWorld1(9);
console.log(china1);
console.log(usa1);
console.log(israel1);

const percentageOfWorld2 = (population) => (
    `${Math.round((((population/7900)*100) + Number.EPSILON) * 100) / 100} %`
);

let china2 = percentageOfWorld2(1441);
let usa2 = percentageOfWorld2(333);
let israel2 = percentageOfWorld2(9);
console.log(china2);
console.log(usa2);
console.log(israel2);