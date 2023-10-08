const makeIncrementer = () => {
  let count=1;
  return (incrementBy=1) => {
    count+= incrementBy;
    console.log(count);
  }
}
console.log("Incrementer1")

const increment = makeIncrementer();
increment(10);
increment(1); 

console.log("Incrementer2")

const increment1 = makeIncrementer();
increment1();
increment1();