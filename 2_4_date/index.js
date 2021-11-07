function currentDate() {
    let today = new Date();
    
    return `Today is ${today.toDateString()}`
};

let today = currentDate();
console.log(today);