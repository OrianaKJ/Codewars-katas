// Description:
// When working with color values it can sometimes be useful to extract the individual red, green, and blue (RGB) component values for a color. Implement a function that meets these requirements:

// Accepts a case-insensitive hexadecimal color string as its parameter (ex. "#FF9933" or "#ff9933")
// Returns an object with the structure {r: 255, g: 153, b: 51} where r, g, and b range from 0 through 255
// Note: your implementation does not need to support the shorthand form of hexadecimal notation (ie "#FFF")

// Example
// "#FF9933" --> {r: 255, g: 153, b: 51}

// My solution:
const hexStringToRGB = hexString => {
    let parts = hexString.slice(1).match(/.{2}/g)
    let rgb = parts.map(e => parseInt(e, 16))
    return {
        r: rgb[0],
        g: rgb[1],
        b: rgb[2]
    }
}