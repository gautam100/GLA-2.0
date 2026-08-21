let doAdd = function(){
    let a = document.getElementById("first_num").value;
    let b = document.getElementById("second_num").value

    document.getElementById("result").innerHTML = `${parseInt(a)+parseInt(b)}`
}