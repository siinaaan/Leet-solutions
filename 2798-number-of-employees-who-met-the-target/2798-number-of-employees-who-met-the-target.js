/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
var numberOfEmployeesWhoMetTarget = function(hours, target) {
    result = []
    for(let i=0; i<hours.length; i++){
        if(hours[i]>=target)result.push(hours[i])
    }return result.length
};