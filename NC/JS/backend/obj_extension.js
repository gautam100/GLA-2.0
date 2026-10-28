const course = {
    name: "Fundamental of JS",
    price: 2000,
    author: "Rajeev K"
}

let keys = Object.keys(course) 
console.log(keys)

Object.defineProperty(course,"price",{
    enumerable: false,
    writable:false,
    configurable: false
})

keys = Object.keys(course) 
console.log(keys)

course.price = 2500
delete course.price
console.log(course.price)

Object.defineProperty(course,"length",{
    enumerable:true
})
keys = Object.keys(course) 
console.log(keys)

