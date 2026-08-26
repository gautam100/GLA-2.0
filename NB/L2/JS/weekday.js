let dayDetail = function(){
    let day = document.getElementById("weekday_dd").value
    let elem = document.getElementById("day_detail")
    if(day === "mon"){
        elem.innerHTML = "<h1>First day of week</h1>"
    }else if(day==="tue"){
        elem.innerHTML = "<h1>Second day of week</h1>"
    }else if(day==="wed"){
        elem.innerHTML = "<h1>Third day of week</h1>"
    }else if(day==="thrus"){
        elem.innerHTML = "<h1>Fourth day of week</h1>"
    }else if(day==="fri"){
        elem.innerHTML = "<h1>Fifth day of week</h1>"
    }else if(day==="sat"){
        elem.innerHTML = "<h1>This is saturday \" WEEKEND \"</h1>"
    }else if(day==="sun"){
        elem.innerHTML = "<h1>This is SUNDAY \" WEEKEND \"</h1>"
    }else{
        elem.innerHTML = "<h1>Pls select a option</h1>"
    }
}