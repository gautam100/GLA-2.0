let fn = function(){
    //for(initilization; Condition; updation){
    //    ...
    //}
    
    /*
    Step 1: initilization
    Step 2: Check Condition
    Step 3: Execute the instructions inside loop block
    Step 4: Updation
    Step 5: Go to Step 2
    */
    for(let a=1; a<=10; a++){
        console.log(a)
    }
    console.log("---------------")
    for(let a=1,b=10; a<11; a++,b--){
        console.log(a+","+b)
    }
    console.log("---------------")
    var x = 1
    for(; x<=5 ;){
        console.log(x)
        x++
    }
    console.log("---------------")
    // for(;true;){
    //     console.log("here...") // Infinite Loop
    // }

}
fn()