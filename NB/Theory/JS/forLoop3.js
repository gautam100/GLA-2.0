//prnTab()
function prnTab(){
    //let num = 6
    let num = document.getElementById("usr_inp").value
    let html = ''
    for(let i=1; i<=10; i++){
        //console.log(num+"X"+i+"="+num*i)
        html += num+"X"+i+"="+num*i+"<br />"
    }
    document.getElementById("result").innerHTML = html
}