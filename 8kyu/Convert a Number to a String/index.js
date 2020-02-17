// Description:
// We need a function that can transform a number into a string.

// What ways of achieving this do you know ?

// Examples :
// numberToString(123); // returns '123';`   
// numberToString(999); // returns '999';`

// My solutions:

// v1
// function numberToString(num) {
//     return num.toString();
// }

// v2
// const numberToString = num => num.toString();

// v3
const numberToString = num => String(num);
