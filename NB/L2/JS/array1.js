function myArray(){
    let arr = [10, 20, 5.5, "Rohit", true]
    //let arr2 = new Array() 
    console.log(arr[0]) //10
    console.log(arr[1]) //20
    console.log("Length of array is:",arr.length) //5
    console.log(arr[arr.length-1]) //true
    console.log("------------------")
    let sum = 0
    for(let i=0;i<arr.length; i++){
        if(typeof arr[i] === "number"){
            sum += arr[i]
        }
    }
    console.log("Sum is: ",sum)
}
myArray()