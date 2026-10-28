//Object to object inheritance in JS
const project1 = {
    name : "Road work",
    display: function(){
        return this.name
    }
}

const project2 = Object.create(project1,{
    name:{
        value: "Bridge Work"
    }
})

console.log(project1.display()) // Road work
console.log(project2.display()) // Bridge work