// Description:
// Given two words and a letter, return a single word that's a combination of both words, merged at the point where the given letter first appears in each word. The returned word should have the beginning of the first word and the ending of the second, with the dividing letter in the middle. You can assume both words will contain the dividing letter.

// Examples
// StringMerge("hello", "world", "l")       ==>  "held"
// StringMerge("coding", "anywhere", "n")   ==>  "codinywhere"
// StringMerge("jason", "samson", "s")      ==>  "jasamson"
// StringMerge("wonderful", "people", "e")  ==>  "wondeople"

// My solution:
// v1
// function stringMerge(string1, string2, letter) {
//     let indexys = [string1.indexOf(letter), string2.indexOf(letter)];
//     let word = `${string1.slice(0, indexys[0])}${string2.slice(indexys[1], string2.length)}`;
//     return word
// }

// v2
const stringMerge = (string1, string2, letter) => {
    let str1 = string1.indexOf(letter);
    let str2 = string2.indexOf(letter);
    return string1.slice(0, str1) + string2.slice(str2, string2.length)
}
