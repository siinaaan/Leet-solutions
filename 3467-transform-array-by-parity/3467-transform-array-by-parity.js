/**
 * @param {number[]} nums
 * @return {number[]}
 */
var transformArray = function(nums) {
    let result = nums.map(num => num % 2 === 0 ? 0 : 1);
    result.sort((a,b)=>a-b);
    return result;
};