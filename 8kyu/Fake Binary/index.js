// Description:
// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// My solution:
const fakeBin = x => {
    let binary = '';
    for(let i = 0; i < x.length; i++) {
    binary += x[i] < 5 ? 0 : 1
  }
return binary
}