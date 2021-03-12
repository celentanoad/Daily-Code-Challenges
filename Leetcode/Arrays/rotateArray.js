function rotateArray(nums, k) {
    while (k > 0) {
        nums.unshift(nums[nums.length -1]);
        nums.pop();
        k--;
    }
    return nums;
}

console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3));