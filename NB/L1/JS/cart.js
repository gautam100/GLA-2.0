function myCart() {
  let prodList = [
    ["Polo Tshirt", 1200],
    ["Reebok Sport Shoe", 3600],
    ["Denim Shirt", 1800],
    ["Park Avenue Shirt", 2400],
  ];

  let tbody = "";
  let index = 0;
  let total = 0;
  for (let prodArr of prodList) {
    tbody += "<tr>";
    tbody += "<td>" + (index + 1) + "</td>";
    tbody += "<td>" + prodArr[0] + "</td>";
    tbody += "<td>" + prodArr[1] + "</td>";
    tbody += "</tr>";
    index++;
    total = total + prodArr[1];
  } //for end
  document.getElementById("table_body").innerHTML = tbody;
  document.getElementById("table_foot").innerHTML =
    "<tr><td colspan='3' align='right'>Total: " + total + "</td></tr>";
}
