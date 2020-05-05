// Description:
// Build Tower
// Build Tower by the following given argument:
// number of floors (integer and always greater than 0).

// Tower block is represented as *

// Python: return a list;
// JavaScript: returns an Array;
// C#: returns a string[];
// PHP: returns an array;
// C++: returns a vector<string>;
// Haskell: returns a [String];
// Ruby: returns an Array;
// Have fun!

// for example, a tower of 3 floors looks like below

// [
//   '  *  ', 
//   ' *** ', 
//   '*****'
// ]
// and a tower of 6 floors looks like below

// [
//   '     *     ', 
//   '    ***    ', 
//   '   *****   ', 
//   '  *******  ', 
//   ' ********* ', 
//   '***********'
// ]
// Go challenge Build Tower Advanced once you have finished this :)

// My solution:

const towerBuilder = nF => {
    const ans = [];
    for (let i = 1; i <= nF; i++) {
        let space = ' '.repeat(nF - i);
        let sign = '*'.repeat(i * 2 - 1);
        ans.push(`${space}${sign}${space}`)
    }
    return ans;
}