function prnTable() {
  let num = parseInt(document.getElementById("tab").value);
  let elem = document.getElementById("result_container")
  for (let i = 1; i <= 10; i++) {
    //console.log(num + "X" + i + "=" + num * i);
    elem.innerHTML += num + "X" + i + "=" + num * i+"<br />";
  }
}
// prnTable();