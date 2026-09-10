var index = 0;
let arr = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"];

function slider() {
  document.getElementById("slider_div").innerHTML =
    `<img src="./img/${arr[index]}" width="640" height="420" />`;
}

function changeImg(action) {
  let sliderLen = arr.length;
  if (action === "next") {
    if (index === sliderLen - 1) {
      index = 0;
    }
    index += 1;
  } else if (action === "prev") {
    if (index === 0) {
      index = sliderLen - 1;
    }
    index -= 1;
  }
  document.getElementById("slider_div").innerHTML =
    `<img src="./img/${arr[index]}" width="640" height="420" />`;
  //document.getElementById("img_counter").innerHTML = index;
}
