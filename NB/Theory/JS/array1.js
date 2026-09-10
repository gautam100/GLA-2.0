function abc(){
    let ar = [10, 10.5, "Rohit", true, function(){return 5 }]
    //let ar2 = new Array()
    console.log(ar[4]())//5
    console.log("----------------")

    for(let i=0; i<ar.length; i++){
        if(typeof ar[i] === "function"){
        console.log("value is:"+ar[i]()+" & Datatype is: "+typeof ar[i])
        }else{
        console.log("value is:"+ar[i]+" & Datatype is: "+typeof ar[i])
        }
    }
}
abc()