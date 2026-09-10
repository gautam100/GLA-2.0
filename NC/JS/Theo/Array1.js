function myArray(){
    let ar = [10, 20, 10.5, "Rohit", true, function(){ return 10 }]

    console.log(ar[0]) // 10
    console.log(ar[1]) // 20
    console.log(ar[2]) // 10.5
    console.log("Length of array is:"+ar.length) // 5

    console.log(ar[5]()) // 10
    console.log("-----------------")
    let sum = 0
    for(let i=0; i<ar.length; i++){
        //console.log(typeof ar[i])
        if(typeof ar[i] === "number"){
            sum = sum+ar[i]
        }
    }
    console.log("Sum of Array is: "+sum)


}

myArray()