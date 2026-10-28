const project1 = {
    name: "Road work",
    display: function(){
        console.log(this.name)
    }
}

const project2 = Object.create(project1, {
    name: {
        value: "Bridge work"
    }
})

project1.display()// Road work
project2.display()// Bridge work