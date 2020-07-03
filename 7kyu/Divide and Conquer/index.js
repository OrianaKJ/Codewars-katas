// Description:
// Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers.

// Return as a number.

// My solution:
const divCon = x => {
    let nums = x.filter(item => typeof item === 'number')
    let strings = x.filter(item => typeof item === 'string')
    return nums.reduce((a, b) => a + b, 0) - strings.map(e => parseInt(e)).reduce((a, b) => a + b, 0)
}