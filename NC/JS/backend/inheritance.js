class MyParent{
    constructor(){
        this.bankBalnce = "10 Lakh"
    }
    display(){
        return this.bankBalnce
    }
}
class MyChild extends MyParent{
    constructor(){
        super() // calling constructor of parent class
        this.salary = "1.5 Lakh"
    }
}

const obj = new MyChild()
console.log("Child salary is :",obj.salary) // 1.5 Lakh
console.log("Paraent bank balance is :",obj.display())