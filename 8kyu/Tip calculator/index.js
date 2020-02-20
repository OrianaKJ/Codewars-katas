// Description:
// Complete the function, which calculates how much you need to tip based on the total amount of the bill and the service.

// You need to consider the following ratings:

// Terrible: tip 0%
// Poor: tip 5%
// Good: tip 10%
// Great: tip 15%
// Excellent: tip 20%
// The rating is case insensitive (so "great" = "GREAT"). If an unrecognised rating is received, then you need to return:

// "Rating not recognised" in Javascript, Python and Ruby...
// ...or null in Java
// ...or -1 in C#
// Because you're a nice person, you always round up the tip, regardless of the service.

// My solution:
function calculateTip(amount, rating) {
    return rating.toUpperCase() == 'TERRIBLE' ? amount * 0
        : rating.toUpperCase() == 'POOR' ? Math.ceil(amount * 0.05)
            : rating.toUpperCase() == 'GOOD' ? Math.ceil(amount * 0.10)
                : rating.toUpperCase() == 'GREAT' ? Math.ceil(amount * 0.15)
                    : rating.toUpperCase() == 'EXCELLENT' ? Math.ceil(amount * 0.20)
                        : 'Rating not recognised'
}