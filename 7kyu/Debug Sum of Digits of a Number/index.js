// Description:
// Debug   function getSumOfDigits that takes positive integer to calculate sum of it's digits. Assume that argument is an integer.

// Example
// 123  => 6
// 223  => 7
// 1337 => 15

// My solution:
const getSumOfDigits = integer => integer.toString().split('').map(n => parseInt(n)).reduce((a, b) => a + b)