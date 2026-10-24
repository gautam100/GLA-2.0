function showProduct(){
    const prodList = [
        {
            name : "Mobile",
            price : 20000,
            color: "Black"
        },
        {
            name : "TV",
            price : 25000,
            color: "Gray"
        },
        {
            name : "Freeze",
            price : 18000,
            color: "Red"
        }
    ]

    let html = ""
    for(let prod of prodList){
        html += "<tr>"
        html += "<td>"+prod.name+"</td>"
        html += "<td>"+prod.color+"</td>"
        html += "<td>"+prod.price+"</td>"
        html += "</tr>"
    }
    document.getElementById("tab_body").innerHTML = html
}