let array = [3,61,5,43,7,8,5,54,77];

//filter method
Array.prototype.myFilter = function(){
    let arr=[];
    for(let i = 0; i < this.length; i++){
        if (this[i] % 2 === 0) {
            arr.push(this[i]);
        } 
    }
return arr;
}
let arr = array.myFilter();
console.log(arr);

//find method
Array.prototype.myFind = function(num){
    for(let i = 0; i < this.length; i++){
        if (this[i]=== num) {
            return true;
        } 
    }
    return false;
}
console.log(array.myFind(54));

//reduce method
Array.prototype.myReduce = function(){
    let prev = this[0];
    for(let i = 1; i < this.length; i++){
        prev += this[i];
    }
    return prev;
}
console.log(array.myReduce());