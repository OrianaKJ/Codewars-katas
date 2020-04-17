// Description:
// Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)

// (the dedicated builtin(s) functionalities are deactivated)

// My solutions:
// v1
// const reverse = array => array.reduce((a, b) => {
//     return [b].concat(a)
// }, []);

// v2
const reverse = arr => arr.reduce((a, b) => [b, ...a], [])