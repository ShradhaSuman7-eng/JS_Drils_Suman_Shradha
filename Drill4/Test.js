// const { filter } = require("../../PERSON_DRILL/Test.js");
const {
  forEach,
  ForMap,
  reduceMethod,
  Find,
  Filter,
  flatten,
} = require("./function.js");

const items = [1, 2, 3, 4, 5, 5];

// ForEach
function printElement(element, index) {
  console.log("Index:", index, "Element:", element);
}

forEach(items, printElement);

// Map
function printsqrt(element, index) {
  return `Index: ${index}, Square: ${element * element}`;
}
console.log(ForMap(items, printsqrt));

//Reduce method
function sum(acc, value) {
  return acc + value;
}
console.log(reduceMethod(items, sum));

// Find Method
function isEven(num) {
  return num % 2 === 0;
}
console.log(Find(items, isEven));

//filter method
function allEvenElement(num) {
  return num % 2 === 0;
}
console.log(Filter(items, allEvenElement));

//flatten method
const nestedArray = [1, [2], [[3]], [[[4]]]]; // use this to test 'flatten'

console.log(flatten(nestedArray));
