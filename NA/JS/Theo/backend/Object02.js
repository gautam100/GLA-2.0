function abc() {
  const userList = [
    {
      name: "John",
      age: 32,
      deapartment: "HR",
    },
    {
      name: "Smith",
      age: 22,
      deapartment: "Developer",
    },
    {
      name: "Cynthia",
      age: 35,
      deapartment: "Sales Manager",
    },
    {
        name:"uday",
        age: 18,
        deapartment: "N/A"
    }
  ];

  let html = ""
  for(let user of userList){
    html += "<tr>"
    html += "<td>"+user.name+"</td>"
    html += "<td>"+user.age+"</td>"
    html += "<td>"+user.deapartment+"</td>"
    html += "</tr>"
  }
  document.querySelector("#tab_body").innerHTML = html
}
