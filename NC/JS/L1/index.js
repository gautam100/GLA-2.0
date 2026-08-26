function doSum(){
    //alert("Function is called");
    let a = document.getElementById("first_num").value 
    let b = document.getElementById("second_num").value

    let sum = parseInt(a)+parseInt(b)
    document.getElementById("result").innerHTML = sum;

}