// Description:
// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

// My solution:

// v1
// function squareSum(numbers) {
//     return numbers.map(number => Math.pow(number, 2)).reduce((a, b) => a + b, 0)
// }

// v2
// const squareSum = n => n.length != 0 ? n.map(i => Math.pow(i, 2)).reduce((a, b) => a + b) : 0

// v3
const squareSum = n => n.map(i => Math.pow(i, 2)).reduce((a, b) => a + b, 0)

