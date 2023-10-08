/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum1 = function (nums, target) {
    const output = new Map();
    for(let i=0;i<nums.length;i++){
        let value = nums[i];
        let pairValue = target-value;
        if(nums.indexOf(pairValue) >= 0){
            return [i,nums.indexOf(pairValue)];
        }
    }
};

console.log(twoSum1([3, 2, 3], 6));
console.log(twoSum1([2,7,11,15], 9));