function chkPrime(){
    let num = 7
    let primeFlag = true
    let i=2
    while(i<num){
        if(num%i === 0){
            primeFlag = false
            break
        }
        i++
    }//while end

    if(primeFlag === true){
        console.log(num, " is a prime number")
    }else{
        console.log(num, " is a not prime number")
    }
}

chkPrime()