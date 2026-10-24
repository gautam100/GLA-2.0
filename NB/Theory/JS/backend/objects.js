let car = {
    brand: "Hundai",
    model: "i-20",
    price: "11 Lakh"
}
console.log(typeof car)

console.log(car.brand)
console.log(car.model)
console.log(car.price)

console.log(car instanceof Object)//true

console.log("--------------")
for(let key in car){
    console.log(car[key])
}

// car is the object of Object class
// Object is the system class in JS
