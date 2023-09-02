const { performance } = require("perf_hooks");

function isPrime(n) {
  // Check if n<=1 or n=4
  if (n <= 1 || n == 4) return false;
  // Check if n<=3
  if (n <= 3) return true;
  // Check whether n is divisible by 2 or 3
  if (n % 2 === 0 || n % 3 === 0) return false;
  // Check from 5 to square root of n
  // Iterate i by (i+6)
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }

  return true;
}

var t0 = performance.now();
const primeNumber = 100000000011;
if (isPrime(primeNumber)) {
  console.log(`${primeNumber} is a prime number`);
} else {
  console.log(`${primeNumber} is a not prime number`);
}
var t1 = performance.now();
console.log("Call to isPrime() took " + (t1 - t0) + " milliseconds.");
