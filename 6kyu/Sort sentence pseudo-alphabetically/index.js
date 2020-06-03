// Description:
// Given a standard english sentence passed in as a string, write a method that will return a sentence made up of the same words, but sorted by their first letter. However, the method of sorting has a twist to it:

// All words that begin with a lower case letter should be at the beginning of the sorted sentence, and sorted in ascending order.
// All words that begin with an upper case letter should come after that, and should be sorted in descending order.
// If a word appears multiple times in the sentence, it should be returned multiple times in the sorted sentence. Any punctuation must be discarded.

// Example
// For example, given the input string "Land of the Old Thirteen! Massachusetts land! land of Vermont and Connecticut!", your method should return "and land land of of the Vermont Thirteen Old Massachusetts Land Connecticut". Lower case letters are sorted a -> l -> l -> o -> o -> t and upper case letters are sorted V -> T -> O -> M -> L -> C.


// My solution:
const sort = sentence => {
    let lower = sentence.split(' ').filter(w => w[0].toLowerCase() === w[0])
    let upper = sentence.split(' ').filter(w => w[0].toUpperCase() === w[0])
    let ansWithChar = lower.sort().concat(upper.sort().reverse()).join(' ')
    return ansWithChar.replace(/[^\w\s]/gi, '')
}