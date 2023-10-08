const simpleGenerator = function* (){
    console.log("Before 1")
    yield 1;
    console.log("After 1")
    console.log("Before 2")
    yield 2;
    console.log("After 2")
    yield 3;
}

const gObj = simpleGenerator();
console.log(gObj.next());
console.log(gObj.next());
// console.log(gObj.next());
// console.log(gObj.next());