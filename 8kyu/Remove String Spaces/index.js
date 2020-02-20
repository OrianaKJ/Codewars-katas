// Description:
// Simple, remove the spaces from the string, then return the resultant string.

// My solutions:
// v1

// function noSpace(x) {
//     return x.split(' ').join('');
// }

// v2
const noSpace = x => x.replace(/\s/g, '') 
