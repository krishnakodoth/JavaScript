// const a1 = [3, 1, 9, 7, 5]
const a2 = [4, 8, 6, 2, 0]
const a1 = [ [13, 17], 1, 9, 7, 5]
// 	const a1 = [ 10, 1, 5, 3, 2, 6, 3]

const concat = (a1, a2) => {
    const res = [...a1,...a2] // << --- Fix this?
    res[0][0] = 23;
    return res;
}

// desired output - [ 3, 1, 9, 7, 5, 4, 8, 6, 2, 0]
console.log(JSON.stringify(concat(a1, a2)));
console.log(JSON.stringify(a1));

