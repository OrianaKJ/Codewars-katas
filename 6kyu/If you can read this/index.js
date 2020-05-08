// Description:
// The idea for this Kata came from 9gag today.here - http://9gag.com/gag/amrb4r9

// You'll have to translate a string to Pilot's alphabet (NATO phonetic alphabet) wiki - https://en.wikipedia.org/wiki/NATO_phonetic_alphabet.

// Like this:

// ** Input: ** If you can read

// ** Output: ** India Foxtrot Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta

// ** Some notes **

// Keep the punctuation, and remove the spaces.
// Use Xray without dash or space.

// My solution:
const to_nato = words => {
    let chifer = {
        a: "Alfa",
        b: "Bravo",
        c: "Charlie",
        d: "Delta",
        e: "Echo",
        f: "Foxtrot",
        g: "Golf",
        h: "Hotel",
        i: "India",
        j: "Juliett",
        k: "Kilo",
        l: "Lima",
        m: "Mike",
        n: "November",
        o: "Oscar",
        p: "Papa",
        q: "Quebec",
        r: "Romeo",
        s: "Sierra",
        t: "Tango",
        u: "Uniform",
        v: "Victor",
        w: "Whiskey",
        x: "Xray",
        y: "Yankee",
        z: "Zulu"
    }
    return words.replace(/\s/g, "").toLowerCase().split("").map(e => (chifer[e] ? chifer[e] : e)).join(" ");
}