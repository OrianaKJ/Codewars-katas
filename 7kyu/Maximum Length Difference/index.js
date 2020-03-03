// Description:
// You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

// Find max(abs(length(x) − length(y)))

// If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

// #Example:

// a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
// a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
// mxdiflg(a1, a2) --> 13
// Bash note:
// input : 2 strings with substrings separated by ,
// output: number as a string

// My solution:
function mxdiflg(a1, a2) {
    let lengthOfStringInA1 = [];
    let lengthOfStringInA2 = [];
    for(let i = 0; i <a1.length; i++){
        lengthOfStringInA1.push(a1[i].length)
    }
    for(let i = 0; i <a2.length; i++){
        lengthOfStringInA2.push(a2[i].length)
    }
    
    return a1.length == 0 || a2.length == 0 ? -1 : Math.max(Math.max(...lengthOfStringInA1) - Math.min(...lengthOfStringInA2), Math.max(...lengthOfStringInA2) - Math.min(...lengthOfStringInA1))
}