var imgList = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"];
var index = 0;
function defaultImg() {
  document.getElementById("slider_container").innerHTML =
    `<img src="./img/${imgList[index]}" width='640' height='420' />`;
}

function changeImg(action) {
  if (action === "next") {
    if(index === imgList.length-1){
        index = 0
    }
    index++;
  } else if (action === "prev") {
    if(index === 0){
        index = imgList.length-1
    }
    index--;
  }
  document.getElementById("slider_container").innerHTML =
    `<img src="./img/${imgList[index]}" width='640' height='420' />`;
}
