// Description:
// Write function parseFloat (for Javascript parseF) which takes a string and returns a number or Nothing (for Python None, for Javascript null) if conversion is not possible.

// My solution:
const parseF = s => (Number.isNaN(parseFloat(s))) ? null : parseFloat(s)