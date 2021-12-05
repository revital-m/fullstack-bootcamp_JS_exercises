function Square(a, b, c, d) {
  this.a = a;
  this.b = b;
  this.c = c;
  this.d = d;
}

Square.prototype.isSquare = function(){
    if (this.a === this.b && this.a === this.c && this.a === this.d) {
        return true;
    }
    else {
        return false;
    }
}

const s1 = new Square(4,4,4,4);
const s2 = new Square(4,3,4,4);
console.log(s1.isSquare());
console.log(s2.isSquare());