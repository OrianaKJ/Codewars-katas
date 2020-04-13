// Description:
// Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

// Example:

// Input:

// 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

// Output:

// 'alpha beta gamma delta'

// My solution:
const removeDuplicateWords = s => {
    let splited = s.split(/[ ,]+/)
    let unique = new Set([...splited])
    return [...unique].join(' ')
}