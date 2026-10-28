class Reportcard {

  constructor(a, b, c) {
    this.math = a;
    this.sci = b;
    this.eng = c;
  }
  totalMarks() {
    return this.math + this.sci + this.eng
  }
  
}

const obj = new Reportcard(80, 75, 90);
console.log(obj.totalMarks()) 

const obj2 = new Reportcard(76, 78, 92);
console.log(obj2.totalMarks()) 
