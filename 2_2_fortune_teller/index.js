function tellFortune(jobTitle, location, partnerName, numberOfChildren) {
    return `You will be a ${jobTitle} in ${location} and married to ${partnerName} with ${numberOfChildren} children.`;
};

let var1 = tellFortune('programmer', 'Tel Aviv', 'Sharon',2);
let var2 = tellFortune('teacher', 'Herzliya', 'Lily',3);
let var3 = tellFortune('doctor', 'LA', 'Kate',1);

console.log(var1);
console.log(var2);
console.log(var3);