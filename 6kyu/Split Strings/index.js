// Description:
// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// solution('abc') // should return ['ab', 'c_']
// solution('abcdef') // should return ['ab', 'cd', 'ef']

// My solution:
const solution = str => {
    let ans = [];
    str = str.split('')
    for (let i = 0; i < str.length; i += 2) {
        ans.push(str.slice(i, i + 2))
    }
    return ans.map(e => e.length == 1 ? e.concat('_').join('') : e.join(''))
}