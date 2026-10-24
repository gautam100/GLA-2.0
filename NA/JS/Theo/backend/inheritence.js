class MyParent{
    constructor(n){
        this.name = n
    }
    prnName(){
        console.log("My name is:",this.name)
    }
}

class MyChild extends MyParent{
    constructor(name){
        super(name)
    }

}
let child01 = new MyChild("Raju")
child01.prnName() //My name is Raju