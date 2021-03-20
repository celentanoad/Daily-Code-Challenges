// First solution:
// function twoSum(nums, target) {
//     let result = [];
//     for (let i = 0; i<nums.length; i++) {
//         for (let j = i+1; j<nums.length; j++) {
//             if (nums[i] + nums[j] === target) {
//                 result.push(i);
//                 result.push(j);
//                 return result;
//             }
//         }
//     }
// }
// Alternate solution:
function twoSums(nums, target) {
    const hash = {};
    for (let i = 0; i<nums.length; i++) {
        if (hash[nums[i]] >= 0) return [hash[nums[i]], i]
        hash[target-nums[i]] = i;
    }
}

console.log(twoSums([2, 7, 11, 15], 9));
