var readlineSync = require('readline-sync');
 
// Wait for user's response.
var num1 = readlineSync.question('Enter first number: ');
var num2 = readlineSync.question('Enter second number: ');

console.log("Sum is",parseInt(num1)+parseInt(num2))