function steps(n){
    for (let i = 1; i < n; i++) {
        let thisStep = '';
        for (let j = 1; j < n; j++) {
            if (j <= i) {
                thisStep += '#';
            }
            else {
                thisStep += ' ';
            }
        }
        console.log(`'${thisStep}'`);
    }
    return 0;
}

let res1 = steps(1);
let res2 = steps(2);
let res3 = steps(3);
let res4 = steps(4);
let res5 = steps(5);




