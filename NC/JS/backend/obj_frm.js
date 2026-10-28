const userArr = []
function submitData(){
    const userObj = {}
    userObj.name = document.querySelector("#user_name").value
    userObj.age = document.querySelector("#user_age").value
    userObj.department = document.querySelector("#user_dept").value
    userArr.push(userObj)

    let html = ""
    for(let user of userArr){
        html += "<tr>"
        html += "<td>"+user.name+"</td>"
        html += "<td>"+user.age+"</td>"
        html += "<td>"+user.department+"</td>"
        html += "</tr>"
    }
    document.getElementById("tab_body").innerHTML = html
}