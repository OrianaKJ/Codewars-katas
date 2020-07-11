// Description:
// Your task is to write function findSum.

// Upto and including n, this function will return the sum of all multiples of 3 and 5.

// For example:

// findSum(5) should return 8 (3 + 5)

// findSum(10) should return 33 (3 + 5 + 6 + 9 + 10)

// My solution:
const findSum = n => {
    let arr = Array.from(Array(n).keys())
    let nums = arr.map(e => e + 1)
    let count = []
    nums.map(e => e % 3 === 0 ? count.push(e) : e % 5 === 0 ? count.push(e) : '')
    return count.reduce((a, b) => a + b, 0)
}