// Description:
// In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

// make as few changes as possible.
// if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
// For example:

// solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
// solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
// solve("coDE") = "code". Upper == lowercase. Change all to lowercase.
// More examples in test cases. Good luck!

// My solution:
const solve = s => {
    let lower = []
    let upper = []
    let ex = [...s].map(e => e === e.toLowerCase() ? lower.push(e) : upper.push(e))
    return lower.length < upper.length ? s.toUpperCase() : s.toLowerCase()
}