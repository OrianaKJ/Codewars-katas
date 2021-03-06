// Description:
// Get the number n (n>0) to return the reversed sequence from n to 1.

// Example : n=5 >> [5,4,3,2,1]

// My solution:
const reverseSeq = n => {
    let ans = []
    for (let i = n; i >= 1; i--) {
        ans.push(i)
    }
    return ans
}