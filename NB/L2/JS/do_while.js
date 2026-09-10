function abc() {
  let i = 1
  do {
    console.log(i)
    i++
  } while (i <= 10)
}
abc()

function nestedLoop(){
    for(let outer=1; outer<=10; outer++){
        for(let inner=101; inner<=105; inner++){
            console.log("Outer is: "+outer+" and inner is: "+inner)
        }
    }
}
nestedLoop()