/*
Synatax:
for(initilization; condtion; updation){
    //block of loop
}

flow:
step 1: Initilization
step 2: Condition Check [True/False]
Step 3: if step 2 is true then Execution of block of loop otherwise loop ends
Step 4: Updation
Step 5: Go to Step 2
*/

function abc(){
    for(let i=1; i<=20; i+=2){
        console.log(i)//12
        i--
    }
    console.log("--------------")
    for(let i=1,j=20; i<=20; i++, j--){
        console.log("i:"+i+" and j :"+j)
    }
    console.log("--------------")
    let x = 100
    for(;x<=115;){
        console.log(x)
        x+=1
    }
    console.log("--------------")

    // for(;1;){
    //     console.log("hello...")
    // }

}
abc()