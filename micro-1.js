console.log(1);

setTimeout(() => console.log(2));

Promise.resolve().then(() => console.log(3));

Promise.resolve().then(() => setTimeout(() => console.log(4)));

Promise.resolve().then(() => console.log(5));

setTimeout(() => console.log(6));

console.log(7);


// console.log("Start")
// Promise.resolve().then().then(function b() {
//   console.log("Promise Resolved")
// });
// setTimeout(function a() {
//   console.log("Timeout")
// }, 0);

// console.log("End")