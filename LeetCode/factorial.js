function getFactorial(n){
    let fact = 1;    
    for(let i=2; i<=n;i++){
        fact = fact*i;
    }
    return fact;
}

console.log(getFactorial(0)) // 1
console.log(getFactorial(1)) // 1
console.log(getFactorial(2)) // 2
console.log(getFactorial(4)) // 4*3*2*1 = 24

// Big O ==> O(n)