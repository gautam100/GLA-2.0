//constructor function
function reportCard(){

    this.totalMarks  = function(){
        console.log("Inside totalMarks")
    }
    
}

const obj = new reportCard()
obj.totalMarks()