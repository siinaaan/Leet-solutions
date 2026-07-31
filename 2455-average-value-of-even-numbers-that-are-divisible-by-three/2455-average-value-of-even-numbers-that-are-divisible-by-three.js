/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function(nums) {
   let a = [];

   for(let i of nums){
    if(i%2===0 && i%3===0){
        a.push(i)
    }
   }
   if(a.length===0){
    return 0;
   }
   let sum = 0
   for(let j of a){
    sum+=j
   }
   let div = sum/a.length;
   return Math.floor(div) 
};