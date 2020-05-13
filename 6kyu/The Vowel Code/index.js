// Description:
// Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

// a -> 1

// e -> 2

// i -> 3

// o -> 4

// u -> 5

// For example, encode("hello") would return "h2ll4" There is no need to worry about uppercase vowels in this kata.

// Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

// For example, decode("h3 th2r2") would return "hi there"

// For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.

// My solution:
const encode = string => {
    return string.split('').map(e => e === "a" || e === "A" ? e.replace("a", 1) || e.replace("A", 1) :
        e === "e" || e === "E" ? e.replace("e", 2) || e.replace("E", 2) :
        e === "i" || e === "I" ? e.replace("i", 3) || e.replace("I", 3) :
        e === "o" || e === "O" ? e.replace("o", 4) || e.replace("O", 4) :
        e === "u" || e === "U" ? e.replace("u", 5) || e.replace("U", 5) : e).join('')
}

const decode = str => {
    return str.split('').map(i => i === "1" ? i.replace("1", "a") :
        i === "2" ? i.replace("2", "e") :
        i === "3" ? i.replace("3", "i") :
        i === "4" ? i.replace("4", "o") :
        i === "5" ? i.replace("5", "u") : i).join('')
}