// Description:
// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

// My solutions:

// v1
// const positiveSum = arr => {
//     let positive = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > 0) {
//             positive.push(arr[i])
//         }
//     }
//     return positive.length === 0 || positive === [] ? 0 : positive.reduce((a, b) => a + b)
// }

// v2
const positiveSum = arr => arr.filter(n => n > 0).reduce((a, b) => a + b, 0);