let ar = [10, 5, 15, 2, 20];
let sum = 0;

function doSum(callback) {
  for (let a of ar) {
    sum = sum + a;
  }
  callback();
}

function getMean() {
  // console.log(sum);
  // console.log(ar.length);
  console.log("Average is:", sum / ar.length);
}

let res = doSum(getMean);
