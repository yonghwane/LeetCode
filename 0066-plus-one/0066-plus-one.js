/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    newdigits = (BigInt(digits.join('')) + 1n).toString()
    result = Array.from(newdigits, Number)
    return result;
};