// Description:
// Write a function that takes an array and counts the number of each unique element present.

// count(['james', 'james', 'john']) 
// #=> { 'james': 2, 'john': 1}

// My solution:
const count = arr => {
    let counts = {};
    arr.forEach((e) => counts[e] ? counts[e]++ : counts[e] = 1);
    return counts;
}