function changeSize() {
  let r = document.getElementById("usr_inp").value;
  document.getElementById("svg1").innerHTML =
    `<circle r="${r}" cx="250" cy="250" fill="red" />`;
    document.getElementById("circle_area").innerHTML = 3.141 * r * r
}
