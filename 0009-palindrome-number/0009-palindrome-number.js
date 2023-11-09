/**
 * @param {number} x
 * @return {boolean}
 */


var isPalindrome = function(x) {
    let reversex = parseInt(x.toString().split('').reverse().join(''), 10)
    if(x === reversex) {
        return true;
    } 
    return false;
}