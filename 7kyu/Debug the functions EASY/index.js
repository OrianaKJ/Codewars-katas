// Description:
// Should be easy, begin by looking at the code. Debug the code and the functions should work.

// There are three functions:
// Multiplication (x)
// Addition (+)
// and
// Reverse (!esreveR)

// My solutions:
// v1
// function multi(arr) {
//     return arr.reduce((a, b) => a * b);
// }
// function add(arr) {
//     return arr.reduce((a, b) => a + b);
// }
// function reverse(str) {
//     return str.split('').reverse().join('');
// }

// v2
const multi = arr => arr.reduce((a, b) => a * b);
const add = arr => arr.reduce((a, b) => a + b);
const reverse = str => str.split('').reverse().join('');
