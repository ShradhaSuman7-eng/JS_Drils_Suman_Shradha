const { counterFactory, limitFunctionCallCount,cacheFunction} = require("./function.js");

console.log(counterFactory().increment()); //incremented by one
console.log(counterFactory().increment()); // again incremented by one
console.log(counterFactory().decrement()); // decremented by 1



// testing limitFunctionCallCount function
function printHello() {
  return "Hello";
}

let hellofun = limitFunctionCallCount(printHello, 3);
console.log(hellofun()); // print hello
console.log(hellofun()); // print hello
console.log(hellofun()); // print hello
// allready function called 3 times,now it will print null
console.log(hellofun()); // null


// testing cacheFunction function
// A basic multiplication function
const multiply = (a, b) => a * b;
console.log(multiply(2, 3)); // multiply(2, 3), outputs 6
console.log(multiply(2, 3)); // multiply(2, 3) again, outputs 6
console.log(multiply(4, 5)); // multiply(4, 5), outputs 20


