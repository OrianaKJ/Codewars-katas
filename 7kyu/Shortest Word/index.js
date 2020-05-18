// Description:
// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

// My solution:
const findShort = s => {
    let lengths = s.split(' ').map(w => w.length)
    let ordered = lengths.sort((a, b) => a - b)
    return ordered[0]
}