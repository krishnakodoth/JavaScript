function twoSum(nums: number[], target: number): number[] {
    const output = new Map();
    for(let i=0;i<nums.length;i++){
        let value = nums[i];
        let mapPair = target-value;
        if(output[mapPair] !== undefined){
            return [output[mapPair],i];
        }
        output[mapPair] = i;
    }
};

console.log(twoSum([3,2,4],9));