function myArray(){
    let ar1 = [function(){return 10}, [5,6,7]]
    console.log(ar1[0]()) //10
    console.log(ar1[1][0]) //5
    console.log(ar1[1][1]) //6
    console.log(ar1[1][2]) //7
    console.log("----------------------")
    let ar2 = ["Apple", "Mango", "Cherry", 100, true]
    for(let temp of ar2){
        console.log(temp)
    }

}
myArray()