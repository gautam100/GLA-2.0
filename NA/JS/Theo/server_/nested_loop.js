let fn = function(){
    for(let outer=1; outer<=5; outer++){
        for(let inner=51;inner<=55; inner++){
            console.log("Outer is: "+outer+" and inner is: "+inner)
        }
    }
}
fn()