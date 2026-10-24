function saveRecord() {
  const userList = [];
  const user = {};

  user.name = document.getElementById("user_name").value;
  user.age = document.querySelector("#user_age").value;
  user.department = document.querySelector("#user_dept").value;

  userList.push(user);
  //console.log(userList);
  
  let html = "";
  for (let user of userList) {
    html += "<tr>";
    html += "<td>" + user.name + "</td>";
    html += "<td>" + user.age + "</td>";
    html += "<td>" + user.department + "</td>";
    html += "</tr>";
  }
  document.querySelector("#tab_body").innerHTML += html;
}
