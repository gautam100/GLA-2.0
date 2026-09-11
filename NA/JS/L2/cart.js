function myCart() {
  let prodList = ["T-Shirt", "Leather Black Shoe", "Denim Jeans", "Park Avenue Shirt"];
  let prodPrice = [1500, 2500, 3000, 2200];
  let html = "";
  let footHtml = "";
  let index = 0;
  let total = 0;
  let discount = 0;
  let totalAfterDiscount = 0;
  
  for (let prod of prodList) {
    html += "<tr>";
    html += "<td>" + (index + 1) + "</td>";
    html += "<td>" + prod + "</td>";
    html += "<td>&#8377; " + prodPrice[index] + "</td>";
    html += "</tr>";
    total = total + prodPrice[index];

    index++;
  } // for end

  document.getElementById("table_body").innerHTML = html;
  footHtml +=
    "<tr align='right'><td colspan='3'>Total: &#8377; " + total + "</td></tr>";

  if (total > 5000) {
    discount = (total * 10) / 100;
    totalAfterDiscount = total - discount;
    footHtml +=
      "<tr align='right'><td colspan='3'>Total after discount: &#8377; " +
      totalAfterDiscount +
      "</td></tr>";
  }

  document.getElementById("table_foot").innerHTML = footHtml;
}
