function changeCircleSize(){
    let r = document.getElementById("user_inp").value
    document.getElementById("svg1").innerHTML = `<circle r=${r} cx='250' cy='250' fill='red' />`
}