/*
1. Callback
2. Promise
3. async await
*/
function greet(user) {
  console.log("Hello ", user.name);
}
function todos() {
  console.log("This is my today's todo list");
  console.log("1. Meeting with Client A \n 2. Working on clint B project");
}

const data = {name:"john"}
setTimeout(greet,2000,data)
todos()
