// Description:
// I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

// My solutions:
// v1
// function arrayPlusArray(arr1, arr2) {
//     let concated = arr1.concat(arr2);
//     let sum = concated.reduce((a,b) => a+b);
//     return sum;
// } 

// v2
const arrayPlusArray = (arr1, arr2) => arr1.concat(arr2).reduce((a, b) => a + b)
