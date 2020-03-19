// Description:
// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// // returns 'www.codewars.com'
// removeUrlAnchor('www.codewars.com#about')

// // returns 'www.codewars.com?page=1' 
// removeUrlAnchor('www.codewars.com?page=1') 

// My solution:
const removeUrlAnchor =url => url.includes('#') ? url.split('').splice(0, url.indexOf('#')).join('') : url
