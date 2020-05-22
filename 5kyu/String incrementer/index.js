// Description:
// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

// My solution:
const incrementString = str => {
    let reg = /\d*$/
    let numStart = str.match(reg)
    let lengthStart = String(str.match(reg)).length
    let numEnd = parseInt(numStart) + 1
    let lengthEnd = String(numEnd).length
    let numOfZerosMissing = lengthStart - lengthEnd
    let wordReg = /[a-zA-Z]+/
    let word = str.match(wordReg)
    if (str == '') {
        return "1"
    }
    if (numStart == '') {
        return `${str}1`
    }
    if (word == null && numOfZerosMissing <= 0) {
        return `${numEnd}`
    }
    if (word == null && numOfZerosMissing > 0) {
        return '0'.repeat(numOfZerosMissing) + `${numEnd}`
    }
    if (numEnd !== NaN && numOfZerosMissing <= 0) {
        return `${word}${numEnd}`
    }
    if (numEnd !== NaN && numOfZerosMissing > 0) {
        return `${word}` + '0'.repeat(numOfZerosMissing) + `${numEnd}`
    }
}