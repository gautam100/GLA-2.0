var arr = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg"];
var index = 0;
function showDefaultImg() {
  document.getElementById("slider-container").innerHTML =
    `<img src="./img/${arr[index]}" width='640' height='420' />`;
}
function changeImg(action) {
  if (action === "next") {
    if (index === arr.length - 1) {
      index = 0;
    }
    index += 1;
  } else if (action === "prev") {
    if(index === 0){
        index = arr.length-1
    }
    index -= 1;
  }
  document.getElementById("slider-container").innerHTML =
    `<img src="./img/${arr[index]}" width='640' height='420' />`;
}
