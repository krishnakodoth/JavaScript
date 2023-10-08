// Decorator Example 1
// Usiing Closure to log howmany times a function called

let sum = (...args) => {
    return [...args].reduce((acc, num) => acc + num);
}

const callCounter = (fn) => {
    let count = 0;
    return (...args) => {
        // Write the log
        console.log(`sum has been called ${count += 1} times`)
        return fn(...args)
    }
}

sum = callCounter(sum);
console.log(sum(1, 2, 3, 4, 5))
console.log(sum(1, 2, 4, 5))
console.log(sum(1, 2, 3))
console.log(sum(1, 4, 5))
console.log(sum( 4, 5))