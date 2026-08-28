function changeSize() {
  let r = document.getElementById("usr_inp").value;
  if(validation(r)){
    document.getElementById("svg1").innerHTML =
    `<circle r="${r}" cx="250" cy="250" fill="red" />`;
    document.getElementById("circle_area").innerHTML = 3.141 * r * r
  }
}

let validation = function(radius){
  if(radius === ""){
    document.getElementById("usr_inp").style.border = "1px solid red"
    document.getElementById("err_container").innerHTML = "Radius cannot be blank"
    return false
  }
  return true
}
