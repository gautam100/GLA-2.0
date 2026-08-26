function changeCircleSize() {
  let res = validation();
  if (res) {
    let r = document.getElementById("user_inp").value;
    document.getElementById("svg1").innerHTML =
      `<circle r=${r} cx='250' cy='250' fill='red' />`;
    document.getElementById("res").innerHTML = 3.141 * r * r;
  }
}
function validation() {
  let r = document.getElementById("user_inp").value;
  if (r === "") {
    document.getElementById("err_container").innerHTML =
      "Error: Radius can't be blank!";
    document.getElementById("user_inp").style.border = "1px solid red";
    return false;
  }
  return true;
}
