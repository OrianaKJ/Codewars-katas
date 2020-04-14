// Description:
// I will give you a string. You respond with "VALID" if the string meets the requirements or "INVALID" if it does not.

// Passwords must abide by the following requirements:

// More than 3 characters but less than 20.

// Must contain only alphanumeric characters.

// Must contain letters and numbers.

// My solution:
const validPass = p => (/^[A-Za-z0-9]{3,19}$/).test(p) && !(/^[A-Za-z]{3,19}$/).test(p) && !(/^[0-9]{3,19}$/).test(p) ? "VALID" : "INVALID"