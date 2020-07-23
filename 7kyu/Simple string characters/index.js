// Description:
// In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

// Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
// --the order is: uppercase letters, lowercase, numbers and special characters.

// My solution:
const solve = s => {
    let up = s.match(/[A-Z]/g).length
    let low = s.match(/[a-z]/g).length
    let num = s.match(/\d/g).length
    let spec = s.match(/[-!$%^&*()_+|~=`'""{}[:;<>?,.@#\/\]]/g).length
    return s.length > 1 ? [up, low, num, spec] : null
}