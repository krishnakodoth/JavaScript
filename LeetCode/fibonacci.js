
function getFibonacci(n) {
    const fib = [0, 1]
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2]
    }
    return fib;
}

console.log(getFibonacci(2));// [0,1]
console.log(getFibonacci(6));// [0,1,1]

/// Big O ==> Iterative --> O(n) - Linear

function getFibRec(n) {
    if (n < 2) {
        return n;
    }
    return getFibRec(n-1) + getFibRec(n-2)
}

console.log(getFibRec(0)) // 0
console.log(getFibRec(1)) // 1
console.log(getFibRec(6));// [0,1,1]

/// Big o ===> Recursive --> O(2^n)