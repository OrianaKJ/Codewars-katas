// Description:
// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, and u as vowels for this Kata.

// The input string will only consist of lower case letters and/or spaces.

// My solutions:

// v1
// const getCount = str => {
//     let vowelsCount = 0;

//     for(let i = 0; i< str.length; i++) {
//         if(str[i].includes('a') || str[i].includes('o') || str[i].includes('i') || str[i].includes('e')||str[i].includes('u')) {
//         ++vowelsCount
//         }
//     }

//     return vowelsCount;
// }

v2
const getCount = str => {
    let vowelsCount = str.match(/[aeiou]/gi);
    return vowelsCount ? vowelsCount.length : 0
}