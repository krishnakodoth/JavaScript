const { performance } = require("perf_hooks");

function isPrime(n) {
  // Corner case
  if (n <= 1) return false;

  // Check from 2 to n-1
  for (let i = 2; i < n; i++) if (n % i == 0) return false;

  return true;
}

var t0 = performance.now();
const primeNumber = 10000000001;
if (isPrime(primeNumber)) {
  console.log(`${primeNumber} is a prime number`);
} else {
  console.log(`${primeNumber} is a not prime number`);
}
var t1 = performance.now();
console.log("Call to isPrime() took " + (t1 - t0) + " milliseconds.");
