//constructor function
function Reportcard(){
    this.totalMarks = function(){
        console.log("inside totalMarks")
    }

}
let raj = new Reportcard()
raj.totalMarks()

function outer(){
    let a = 10
    console.log("Inside outer function")
    function inner1(){
        console.log("Inside inner1")
    }
    inner1()
}

outer()