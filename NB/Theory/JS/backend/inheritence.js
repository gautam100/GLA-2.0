class Parent{
    constructor(a=0,b=0){
        this.num1 = a
        this.num2 = b
    }
    doSum(){
        return this.num1 + this.num2
    }
}
class Child extends Parent{
    constructor(a,b){
        super(a,b) // calling constructor of parent class
    }
}

let c1 = new Child(10,20)
console.log(c1.doSum()) //30