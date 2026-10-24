function MyObject(){
    const userList = [
        {
            name: "John",
            age: 25,
            education: "Btech"
        },
        {
            name: "Smith",
            age: 26,
            education: "MBA"
        },
        {
            name: "Cynthia",
            age: 30,
            education: "Btech"
        }
    ]

    let html =""
    let index = 1
    for(let user of userList){
        html += "<tr>"
        html += "<td>"+index+"</td>"
        html += "<td>"+user.name+"</td>"
        html += "<td>"+user.age+"</td>"
        html += "<td>"+user.education+"</td>"
        html += "</tr>"
        index++
    }
    document.getElementById("tab_body").innerHTML = html
}