// Description:

// Complete the solution so that it returns a formatted string. The return value should equal "Value is VALUE" where value is a 5 digit padded number.

// Example:

// solution(5) // should return "Value is 00005"

// My solution:
// v1
// const solution = (v) => {
//   let vl = Array.from(String(v), Number).length;
//   let zeros = Array(5 - vl)
//     .fill(0)
//     .join("");
//   return `Value is ${zeros}${v}`;
// };

// v2:
// const solution = (v) => {
//   let vl = v.toString().length;
//   let zeros = Array(5 - vl)
//     .fill(0)
//     .join("");
//   return `Value is ${zeros}${v}`;
// };

// v3:
const solution = (v) => `Value is ${v.toString().padStart(5, "0")}`;
