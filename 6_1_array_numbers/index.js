const arr = [1,7,3,0,-5,7,3,9];

(function arrPrint(arr){
    console.log('arr ='); 
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]); 
    }
    return 0;
})(arr);

(function arrLength(arr){
    let myArrLength = 0;
    for (let i = 0; i < arr.length; i++) {
        myArrLength ++;
    }
    console.log(`myArrLength = ${myArrLength}`); 
    return myArrLength;
})(arr);

(function arrSum(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(`sum = ${sum}`); 
    return sum;
})(arr);

(function arrMulti(arr){
    let mult = 1;
    for (let i = 0; i < arr.length; i++) {
        mult *= arr[i];
    }
    console.log(`mult = ${mult}`); 
    return mult;
})(arr);

