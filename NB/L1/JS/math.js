//named function
function doAdd() {}

//anonymous function
let add = function () {
  //debugger;
  let a = document.getElementById("num1").value;
  let b = document.getElementById("num2").value;
  let sum = parseInt(a) + parseInt(b);

  //document.getElementById("result").innerHTML = "Sum is"+ (parseInt(a)+parseInt(b))
  document.getElementById("result").innerHTML = `Sum is ${sum}`;
};
