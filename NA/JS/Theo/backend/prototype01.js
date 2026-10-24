//Imagine student is a class
function student(){
    this.name = "Rohit"
    function abc(){
        console.log(this.name)
    }
}


student.prototype.semester = function(){
    console.log(this.name)
}


let obj = new student()
obj.semester()


