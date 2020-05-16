// Description:
// Task:
// Given a list of integers l, return the list with each value multiplied by integer n.

// Restrictions:
// The code must not:

// contain *.
// use eval() or exec()
// contain for
// modify l
// Happy coding :)

// My solution:
const multiply = (n, l) => l.map(e => Math.round(parseInt(e) / (1 / n)))