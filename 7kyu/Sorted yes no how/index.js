// Description:
// Complete the method which accepts an array of integers, and returns one of the following:

// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// You can assume the array will always be valid, and there will always be one correct answer.

// My solution:
function isSortedAndHow(array) {
    let asc =  [...array].sort((a,b) => a-b);
    let desc = [...array].sort((a,b) => b-a);
    if (array.every((number, index) => number === desc[index]))
      return 'yes, descending'
    if (array.every((number, index) => number === asc[index]))
      return 'yes, ascending'
    return 'no'
}