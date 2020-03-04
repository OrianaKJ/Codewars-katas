// Description:
// Write a function named sumEvenNumbers, taking an array of integers as single parameter. Your function must return the sum of the even values of this array.

// For example, considering this input value : [4,3,1,2,5,10,6,7,9,8], then your function should return 30 (because 4 + 2 + 10 + 6 + 8 = 30).

// My solutions:
// v1 
// function sumEvenNumbers(input) {
//     let newInput = [...input]
//     let nums = [];
//     for(let i = 0; i< newInput.length; i++) {
//       if(newInput[i]%2 === 0){
//       nums.push(newInput[i])
//       }
//     }
//     return nums.reduce((a,b)=>a+b)
// }

// v2
const sumEvenNumbers =input =>  {
    let nums = [];
    [...input].map(n => n%2 === 0 ? nums.push(n) : '')
    return nums.reduce((a,b)=>a+b)
  }
  