console.log(a); //undefined

var a = 10;

/*
Hoisting: It is a default behaviour in JS which moves declarations at the top of
its scope

TDZ (Temporal Dead Zone)
*/

xyz() //No Error because named function successfully hoisted
function xyz(){
    console.log("This is function xyz")
}

abc() //Error
var abc = function(){
    console.log("This is function abc")
}
