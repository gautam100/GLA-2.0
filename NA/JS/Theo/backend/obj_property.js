course1 = {
    course_name: "Deep dive JS",
    price: 2500,
    author: "Rohit Jain"
}

let prop = Object.keys(course1) //[course_name, price, author]
console.log(prop)

Object.defineProperty(course1,"price",{
    enumerable: false
})

let prop1 = Object.keys(course1) //[course_name, author]
console.log(prop1)
//-----------------------------------------
Object.defineProperty(course1,"length",{
    enumerable:true
})

prop1 = Object.keys(course1) 
console.log(prop1)

// ---------------------------------------------


Object.defineProperty(course1,"price",{
    writable: false,
    configurable: false
})

course1.price = 3500

delete course1.price

console.log(course1.price)
