class ReportCard{

    constructor(a,b,c){
        this.math = a
        this.sci = b
        this.eng = c
    }

    totalMarks(){
        return this.math + this.sci + this.eng
    }

}
const o1 = new ReportCard(80,75,90)
console.log(o1.totalMarks()) // Inside totalMarks

const o2 = new ReportCard()
console.log(o2.totalMarks())