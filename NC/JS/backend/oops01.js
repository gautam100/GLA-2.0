class ReportCard{
    constructor(a,b,c){
        this.math = a
        this.sci = b
        this.eng = c
    }
    totalMarks(){
        //console.log("Inside totalMarks")
        return this.math + this.sci + this.eng
    }
}

let raj = new ReportCard(80,70,90)
console.log(raj.totalMarks())

let john = new ReportCard(78,98,66)
console.log(john.totalMarks())



