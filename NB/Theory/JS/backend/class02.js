//Imagine Student is a class
function Student(name = "") {
  console.log("My name is :" + name);
  
}

Student.prototype.abc = function () {
  console.log("Inside abc");
};
Student.prototype.method01 = function(){
    console.log("Inside method01")
}
let obj1 = new Student("Rohit")
obj1.abc()
let obj2 = new Student("Rohit")
obj2.abc()
obj2.method01()
