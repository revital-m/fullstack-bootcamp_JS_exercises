function myPow(a,n){
    if (n===0) return 1;
    return myPow(a,n-1)*a;
}

console.log(myPow(4,3));