function binarySearch(arr, x){
    return binarySearchInner(arr, x, 0, arr.length-1)
}

function binarySearchInner(arr, x, l, h){
    let m = Math.floor((h+l)/2);
    if (x === arr[m]) return m;
    if (h<l) return -1;

    return (x > arr[m]) ? binarySearchInner(arr, x, m+1, h) : binarySearchInner(arr, x, l, m-1);
    
}

let arr = [1,2,4,6,8,10,56];
console.log(binarySearch(arr, 40));