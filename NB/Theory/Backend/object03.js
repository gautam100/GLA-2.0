const obj = {
    fn: function(){
        console.log("Inside fn")
    },
    key2: {'a':1,'b':2},
    key3: ["John",25,true],
    key4: undefined
}

obj.fn()
console.log(obj.key2)
console.log(obj.key3)
console.log(obj.key4)

console.log(Object.keys(obj).length) 
console.log(Object.keys(obj))