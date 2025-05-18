// 1. Function Declaration
function greet(name) {
  return `Hello, ${name}`;
}
console.log(greet("Ghazi")); // Output: Hello, Ghazi

// 2. Function Expression
const add = function (a, b) {
  return a + b;
};
console.log(add(2, 3)); // Output: 5

// 3. Arrow Function
const square = (n) => n * n;
console.log(square(4)); // Output: 16