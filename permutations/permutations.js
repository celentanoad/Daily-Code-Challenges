//Given a collection of distict integers, return all possible permuations

function permute(nums) {
    let result = [];
    let temp = [];
    findPermutations(temp, nums, result);
    return result;
}

function findPermutations(temp, nums, result) {
    if (!nums.length) return result.push(temp.concat());
    for (let i = 0; i< nums.length; i++) {
        const newNum = nums[i]
        temp.push(newNum);
        nums.splice(i, 1);
        findPermutations(temp, nums, result);
        temp.pop();
        nums.splice(i, 0, newNum);
    }
};

console.log(permute([1, 2, 3]));