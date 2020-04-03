// Descrption:
// Create a function that takes an array of numbers, and returns the index of the first odd number.

// oddNum([2, 4, 6, 7, 10]) // => 3
// oddNum([12, 11, 24, 78, 13, 86, 28]) // => 1
// If there are no odd numbers, the function should output -1. Numbers are guaranteed to be non-negative.

// My solution:
const oddNum = arr => arr.findIndex(n => n % 2 != 0)