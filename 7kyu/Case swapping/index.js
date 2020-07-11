// Description:
// Given a string, swap the case for each of the letters.

// e.g. CodEwArs --> cODeWaRS

// Examples
// ""           ->   ""
// "CodeWars"   ->   "cODEwARS"
// "abc"        ->   "ABC"
// "ABC"        ->   "abc"
// "123235"     ->   "123235"

// My solution:
const swap = str => [...str].map(e => e === e.toLowerCase() ? e.toUpperCase() : e.toLowerCase()).join('')