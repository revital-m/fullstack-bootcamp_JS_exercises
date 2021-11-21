function FibonacciNum(n){
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    return FibonacciNum(n-1) + FibonacciNum(n-2);
}

console.log(FibonacciNum(4));