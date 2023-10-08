/*console.log('Start');

let count = 1;
setTimeout(()=>{
    console.log("first 0s");
},0);


Promise.resolve(1).then(function resolve() {
    console.log('Inside Resove!');
    setTimeout(()=>{
        console.log('Resolved!');
    },1000);
  });
  

setTimeout(()=>{
    console.log("after 2s");
},2000);

setTimeout(()=>{
    console.log("second 0s");
},0);

const intObj = setInterval(()=>{
    console.log('setInterval');
    if(count===5){
        clearIntervalHandler();
    }
    count++;
},1000);

const clearIntervalHandler = () =>{
    console.log('clearIntervalHandler')
    clearInterval(intObj);
}
console.log('End of script');
*/


console.log('a');

setTimeout(() => console.log('b'), 0);

new Promise((resolve, reject) => {
  resolve();
})
.then(() => {
  console.log('c');
});

console.log('d');