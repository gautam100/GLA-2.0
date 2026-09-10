function abc(){
    for(let a=1; a<11; a++){
        console.log(a)
    }
    console.log("-------------------")
    for(let a=1, b=10; a<=10; a++,b--){
        console.log("A:"+a+" B:"+b)
    }
    console.log("-------------------")
    let x = 1
    for(;x<=20;){
        console.log(x)
        x+=2
    }
    // for(;true;){
    //     console.log("Hello...")
    // }
}

abc()