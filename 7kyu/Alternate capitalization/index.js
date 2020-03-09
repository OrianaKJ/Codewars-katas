// // Description:
// // Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// // For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// // The input will be a lowercase string with no spaces.

// // Good luck!

// // My solutions:
// v1
// function capitalize(s){
//     let splited = s.split('')
//     let odd=[]
//     let even=[]
//     for (let i = 0; i < splited.length; i++) {
//       if(i%2 === 0) { odd.push(splited[i].toUpperCase())} else { odd.push(splited[i]) }
//     }
//     for (let i = 0; i < splited.length; i++) {
//       if(i%2 === 0) { even.push(splited[i])} else { even.push(splited[i].toUpperCase()) }
//     }
//     return [odd.join(''), even.join('')]
//   };

// v2
const capitalize = s => {
    const odd = s.split('').map((l, i) => i % 2 !== 0 ? l.toUpperCase() : l).join('');
    const even = s.split('').map((l, i) => i % 2 === 0 ? l.toUpperCase() : l).join('');
    return [even, odd]
};