// Desctiption:
// Create a toDense() function that given a sparse array it returns the respective dense array.

// For example:

// var sparse = [1,,null,,2,,null,undefined,,3,,4,5,,,10]; // initial array

// console.log(function(sparse));      // result => [1, 2, 3, 4, 5, 10];
// Note: the function must ignore undefined and null values.

// Note: use sparse as only argument for your function.

// My solution:
const toDense = sparse => sparse.filter(n => (typeof n === "number" || typeof n === "string"))