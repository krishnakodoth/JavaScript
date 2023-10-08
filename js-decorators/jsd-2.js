// Decorator Example 2
// Check for valid parameter and number of parameters

let rectangleArea = (length, width) => {
    return length * width;
}

const countParams = (fn) => {
    return (...params) => {
        if (params.length !== fn.length) {
            throw new Error(`Incorrect number of parameters for ${fn.name}`);
        }
        return fn(...params)
    }
}

const requireIntegers = (fn) => {
    const fnName = fn.name;
    return (fnName, ...args) => {
        args.forEach(arg => {
            if (!Number.isInteger(arg)) {
                throw new TypeError(`Arguments for ${fnName} must be Integers`)
            }
        });
        return fn(...args);
    }
}

rectangleArea = countParams(rectangleArea);
rectangleArea = requireIntegers(rectangleArea);
console.log(rectangleArea(100, 10))
console.log(rectangleArea(100, 10, 10))