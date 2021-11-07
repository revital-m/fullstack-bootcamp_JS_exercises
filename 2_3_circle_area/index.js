function circleArea(radius){
    return ((Math.PI)*(Math.pow(radius, 2)));
};

let myArea = circleArea(5);
let myAreaRounded = Math.round((myArea + Number.EPSILON) * 100) / 100;

console.log(myArea);
console.log(myAreaRounded);