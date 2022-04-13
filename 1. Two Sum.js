/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    let indices = [];
    for(let i = 0; i < nums.length - 1; i++){
        const leftValue = nums[i];
        let targetFounded = false;
        for(let j = i + 1; j < nums.length; j++){
            const rightValue = nums[j];
            if(leftValue + rightValue === target){
                targetFounded = true;
                indices.push(i);
                indices.push(j);
                break;
            }
        }
        if(targetFounded) break;
    }
    return indices;
};