import 'core-js'

const newSession = (heading) => {
    console.log('\x1b[33m============================================================================== \x1b[0m');
    console.log(`\x1b[92m\t\t %s\x1b[0m`, heading)
    console.log('\x1b[33m============================================================================== \x1b[0m');
}

const a1 = new Array()
const a2 = Array()
const a3 = []
console.log(a1);
console.log(a2);
console.log(a3);


const a4 = new Array(10)
const a5 = Array(10)
// const a6 = [...Array(10).keys()]
const a6 = Array.from({ length: 10 }, (_, index) => index + 1);
console.log(a4);
console.log(a5);
console.log(a6);

newSession("Array.prototype.at()")

/**
 * Array.prototype.at()
 */
const array1 = [5, 12, 8, 130, 44];

let index = 2;

console.log(`Using an index of ${index} the item returned is ${array1.at(index)}`);
// Expected output: "Using an index of 2 the item returned is 8"

index = -2;

console.log(`Using an index of ${index} item returned is ${array1.at(index)}`);
// Expected output: "Using an index of -2 item returned is 130"

// Our array with items
const colors = ["red", "green", "blue"];

// Using length property
const lengthWay = colors[colors.length - 2];
console.log(lengthWay); // 'green'

// Using slice() method. Note an array is returned
const sliceWay = colors.slice(-2, -1);
// return array from -2 to -1 (-1 is excluded)
console.log(sliceWay[0]); // 'green'

// Using at() method
const atWay = colors.at(-2);
console.log(atWay); // 'green'

const arrayLike = {
    length: 2,
    0: "a",
    1: "b",
    2: "c", // ignored by at() since length is 2
};

// console.log(arrayLike.at(2))
// TypeError: arrayLike.at is not a function

console.log(Array.prototype.at.call(arrayLike, 0)); // "a"
console.log(Array.prototype.at.call(arrayLike, 2)); // undefined
console.log(Array.prototype.at.call(arrayLike, -1)); // undefined


newSession("Array.prototype.concat()")
/**
 * Array.prototype.concat()
 * 
 * The concat() method is used to merge two or more arrays. 
 * This method does not change the existing arrays, but instead returns a new array.
 */

const concatArray1 = ['a', 'b', 'c'];
const concatArray2 = ['d', 'e', 'f'];
const concatArray3 = concatArray1.concat(concatArray2);

console.log(concatArray3);
// Expected output: Array ["a", "b", "c", "d", "e", "f"]

const concatArrayLike = {
    [Symbol.isConcatSpreadable]: true,
    length: 2,
    0: 1,
    1: 2,
    2: 99, // ignored by concat() since length is 2
};
console.log(Array.prototype.concat.call(concatArrayLike, 3, 4)); // [1, 2, 3, 4]

newSession("Array.prototype.copyWithin()")
/**
 * Array.prototype.copyWithin()
 * The copyWithin() method shallow copies part of an array to another location in the same array and returns 
 * it without modifying its length.
 */
const copyWithArray1 = ['a', 'b', 'c', 'd', 'e'];

console.log(copyWithArray1);
// Copy to index 0 the element at index 3
console.log([...copyWithArray1].copyWithin(0, 3, 4));
// Expected output: Array ["d", "b", "c", "d", "e"]

// Copy to index 1 all elements from index 3 to the end
console.log(copyWithArray1.copyWithin(1, 3));
// Expected output: Array ["d", "d", "e", "d", "e"]

console.log(copyWithArray1.copyWithin(1, 2, 3));

console.log([1, 2, 3, 4, 5].copyWithin(0, 3));
// [4, 5, 3, 4, 5]

console.log([1, 2, 3, 4, 5].copyWithin(0, 3, 4));
// [4, 2, 3, 4, 5]

console.log([1, 2, 3, 4, 5].copyWithin(-2, -3, -1));
// [1, 2, 3, 3, 4]

const copyWithinArrayLike = {
    length: 5,
    3: 1,
};
console.log(Array.prototype.copyWithin.call(copyWithinArrayLike, 0, 3));
// { '0': 1, '3': 1, length: 5 }
console.log(Array.prototype.copyWithin.call(copyWithinArrayLike, 3, 1));
// { '0': 1, length: 5 }
// The '3' property is deleted because the copied source is an empty slot

newSession("Array.prototype.entries()")
/**
 * Array.prototype.entries()
 * 
 * The entries() method returns a new array iterator object that contains the key/value pairs for each index in the array.
 */


 const entriesArray1 = ['a', 'b', 'c'];

const iterator1 = entriesArray1.entries();

console.log(Array.from(entriesArray1.entries()))

console.log(iterator1.next().value);
// Expected output: Array [0, "a"]

console.log(iterator1.next().value);
  // Expected output: Array [1, "b"]

  