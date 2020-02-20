// Description:
// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

// My solutions:
// v1
// function sumMix(x) {
//     return x.reduce((x, y) => x + Number(y), 0);
// }

// v2
// const sumMix =x=> { 
//     let numbers = x.map(i => i*1)
//     return numbers.reduce((a,b) => a+b)
//   }

// v3
const sumMix = x => x.map(i => i * 1).reduce((a, b) => a + b)
