function abc(){
    let ar1 = [1,2,3]
    let ar2 = [...ar1] //deep copy using rest operator 

    ar1[2] = 30
    console.log(ar1) //[1,2,30]
    console.log(ar2) //[1,2,30]


}

abc()