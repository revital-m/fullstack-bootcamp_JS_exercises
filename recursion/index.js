function count1(num){
    for (let i = num; i > 0; i--) {
        console.log(i);
    }
}

function count2(num){
    if (num === 0) return;
    console.log(num);
    count2(num-1);
}

count1(5);
count2(5);