function Student(name){
    this.name  = name
}
Student.prototype.midTermMarks = function(){
    console.log("Mid Term Marks of ",this.name)
}
const john = new Student("John")
console.log(john.name) // John
john.midTermMarks()

const smith = new Student("Smith")
console.log(smith.name) // Smith
smith.midTermMarks()