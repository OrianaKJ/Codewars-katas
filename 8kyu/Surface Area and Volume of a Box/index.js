// Description:
// Write a function that returns the total surface area and volume of a box as an array: [area, volume]

// My solution:
const getSize = (w, h, d) => [(2 * w * h) + (2 * w * d) + (2 * h * d), w * d * h]
