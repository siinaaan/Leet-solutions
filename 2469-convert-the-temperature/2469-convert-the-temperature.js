/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function(celsius) {
    let arr = [];
    let k = celsius + 273.15;
    let f = celsius*1.80 + 32.00;
    arr.push(k,f);
    return arr;
};