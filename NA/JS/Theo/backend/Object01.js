let stud_01 = {}
//stud_01 is the object of class "Object"
stud_01.name = "Uday"
stud_01.age = 20
stud_01.skills = ["C++","Java"]
//Here name, age & skills are keys & "Uday", 20. [C++, Java] are values

let stud_02 = {name: "Shreya", age: 18, skills: ["poetry","Drama"]}

console.log(stud_01.name) // Uday

//iterate an object using for in loop
for(let key in stud_01){
    console.log("Key:",key," Value is: ",stud_01[key])
}

console.log(Object.keys(stud_02))//return all keys of object

console.log(stud_02 instanceof Object)//true

