/*
for(initilization; condition; updation){

    //block of loop

}
    step 1: initilization
    Step 2: Condition check [True / False]
    Step 3: Execute block of loop
    Step 4: Updation
    Step 5: Go to step 2 
*/

abc()
function abc(){
    for(let i=1; i<=20; i+=2){
        console.log(i)
    }
    console.log("-----------------")
    for(let i=1, j=20; i<20; i++, j--){
        console.log("i:"+i+" and J:"+j)
    }
    console.log("-----------------")
    let a = 100
    for(;a<150;){
        console.log(a)
        a+=5
    }
    console.log("-----------------")
    for(;true;){
        console.log("hello..")
    }
}