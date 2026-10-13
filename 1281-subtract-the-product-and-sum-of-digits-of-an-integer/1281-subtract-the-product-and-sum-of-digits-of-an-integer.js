/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let digit = String(n).split("").map(Number);
    let product = 1;
    let sum = 0;
    
    for(let digits of digit){
        product *= digits;
        sum += digits
    }
    return product - sum;
};