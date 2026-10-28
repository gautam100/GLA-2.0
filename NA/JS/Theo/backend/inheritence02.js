//Object to Object inheritence
const project1 = {
    name: "Road Work",
    prnName: function(){
        console.log(this.name)
    }
}

const project2 = Object.create(project1,{
    name: {
        value: "Bridge Work"
    }
})

project1.prnName() // Road work
project2.prnName() // Bridge work