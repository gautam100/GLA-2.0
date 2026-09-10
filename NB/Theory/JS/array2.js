function xyz(){
    let ar = [10, 20, 30, 10, 30]
    let uniqueAr = [...new Set(ar)]
    console.log(uniqueAr)
    console.log("---------------")
    let ar1 = [1,2,3]
    let ar2 = [...ar1]
    ar1[2] = 30
    console.log(ar1) // [1,2,30]
    console.log(ar2) // [1,2,30]
}
xyz()