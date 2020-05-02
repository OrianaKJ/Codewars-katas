// Description:
// Write a function which takes a positive integer and returns the number of ones that appear in its binary representation.

// For example,

// ones(1); // -> 1
// ones(4); // -> 1
// ones(7); // -> 3
// You may assume that the input is always a positive integer.

// My solution:
// v1
// const ones = n => {
//     let str = n.toString(2);
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === "1") {
//             count++
//         }
//     }
//     return count
// }

// v2
const ones = n => n.toString(2).split('1').length - 1;