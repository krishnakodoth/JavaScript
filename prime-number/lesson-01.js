const { performance } = require("perf_hooks");

// program to check if a number is prime or not
const isPrime = (number) => {
  let isPrime = true;
  // check if number is equal to 1
  if (number === 1) {
    console.log("1 is neither prime nor composite number.");
  }
  // check if number is greater than 1
  else if (number > 1) {
    // looping through 2 to number-1
    for (let i = 2; i < number; i++) {
      if (number % i == 0) {
        isPrime = false;
        break;
      }
    }
  }
  return isPrime;
};

var t0 = performance.now();
const primeNumber = 10000000001;
if (isPrime(primeNumber)) {
  console.log(`${primeNumber} is a prime number`);
} else {
  console.log(`${primeNumber} is a not prime number`);
}
var t1 = performance.now();
console.log("Call to isPrime() took " + (t1 - t0) + " milliseconds.");
