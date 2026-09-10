function abc() {
  let ar1 = [
    10,
    5.5,
    true,
    "Rohit",
    function () {
      return "abc";
    },
  ]; //Shorthand
  //let ar2 = new Array()
  console.log(ar1[0]); //10
  console.log(ar1[ar1.length - 1]()); //function(){return 'abc' }

  console.log("-------------");
  for (let i = 0; i < ar1.length; i++) {
    console.log("index:" + i + " value:" + ar1[i]);
  }
  console.log("-------------");
  for (let temp of ar1) {
    if (typeof temp === "function") {
      console.log("datatype:" + typeof temp + " value is :" + temp());
    } else {
      console.log("datatype:" + typeof temp + " value is :" + temp);
    }
  }
}

abc();
