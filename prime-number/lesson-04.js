const { performance } = require("perf_hooks");

function isPrime(n) {
  var i = 1;

  // corner cases
  if (n == 0 || n == 1) {
    return false;
  }

  // Checking Prime
  if (n == i) return true;

  // base cases
  if (n % i == 0) {
    return false;
  }
  i++;
  return isPrime(n);
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
