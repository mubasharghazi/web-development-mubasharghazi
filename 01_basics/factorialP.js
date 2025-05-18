console.log("Enter a number to calculate its factorial:");
let n = 3;
function factorial(n) {
  if (n < 0) return undefined; // Factorial not defined for negative numbers
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

let result = factorial(n);
console.log(`The factorial of ${n} is ${result}`);