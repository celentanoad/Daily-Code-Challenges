function lengthOfSubsequence(nums) {
    if (nums.length === 0) {
        return 0;
    }
      if (nums.length === 1) {
        return nums.length;
    }
    let holder = [];
    let temp = -Infinity;
    for (let i = 0; i<nums.length; i++) {
        if (nums[i]<nums[i+1]) {
            if (nums[i] < 0 && nums[i+1] < 0) {
                temp = nums[i] - nums[i+ 1];
                holder.push(nums[i]);
            } else {
                temp = nums[i] + nums[i+ 1];
                holder.push(nums[i]);
            }
            console.log(temp)
        } else {
            if (nums[i] <= temp) {
                holder.push(nums[i]);
                i++;
            } 
        }
    }
    if (holder.length === 0) {
        return 1;
    }
    console.log(holder);
    return holder.length;
}

console.log(lengthOfSubsequence([4, 10, 4, 3, 8,9]))
