//Lexical Scope
function Parent(){

    let a =10
    function child1(){
        a+=1
        console.log("Child01",a) //11
    }
    function child2(){
        a+=5
        console.log("Inside child2:",a)//16
    }

    child1()
    child2()
}

Parent()
