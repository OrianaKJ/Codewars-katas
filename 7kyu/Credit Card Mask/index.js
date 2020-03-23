// Description:
// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// Examples
// maskify("4556364607935616") == "############5616"
// maskify(     "64607935616") ==      "#######5616"
// maskify(               "1") ==                "1"
// maskify(                "") ==                 ""

// // "What was the name of your first pet?"
// maskify("Skippy")                                   == "##ippy"
// maskify("Nananananananananananananananana Batman!") == "####################################man!"

// My solution:
const maskify = cc =>  {
    let toHash = cc.slice(0, cc.length-4);
    let splited = toHash.split('').map(n=>n.replace(n, '#')).join('');
    let num = cc.slice(cc.length-4, cc.length)
    return cc.length <=4 ? cc : `${splited}${num}`
}
  