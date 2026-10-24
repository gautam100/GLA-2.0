const obj = {
  name: "John",
  age: 28,
  isStudent: false,
  fn: function () {
    return "I am inside fn function"
  },
  hobby: ["Cooking", "Gardening", "Playing cricket"],
  ob: {
    a: 10,
    b: 20,
  },
};

for (let key in obj) {
  if (key === "fn") {
    console.log("Key:", key, "Value:", obj[key]());
  } else {
    console.log("Key:", key, "Value:", obj[key]);
  }
}
console.log(typeof obj); //object
console.log(obj instanceof Object); //true
