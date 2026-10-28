const course = {
    name: "Fundamentals of JS",
    price: 2500,
    author: "R Krishnan"
}

Object.defineProperty(course,"price",{
    enumerable:false,
    writable:false,
    configurable:false
})
let keys = Object.keys(course)
console.log(keys)//[name, author]

course.price = 3500
console.log(course.price)//2500

delete course.price
console.log(course.price)//2500

Object.defineProperty(course,"length",{
    enumerable:true,
})
keys = Object.keys(course)
console.log(keys)
