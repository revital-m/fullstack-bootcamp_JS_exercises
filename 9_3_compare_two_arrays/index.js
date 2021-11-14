const food = ["Noodle", "Pasta", "Ice-cream", "Meat", "Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza", "Olives", "Hamburgers"];
// const food1 = ["Fries", "Pizza", "Hamburgers"];

(function compareTwoArr(firstArr, secondArr){
    let sameItems = [];
    for (let i = 0; i < firstArr.length; i++) {
        for (let j = 0; j < secondArr.length; j++) {
            if (firstArr[i] === secondArr[j]) {
                sameItems.push(firstArr[i]);
            }
        }
    }
    if (sameItems.length === 0) {
        return console.log(false);
    }
    return console.log(sameItems);
})(food, food1);

