//Given an array with n objects colored red, white or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white and blue.
//Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

//Note: You are not suppose to use the library's sort function for this problem.

//Example:
//Input: [2,0,2,1,1,0]
//Output: [0,0,1,1,2,2]

function sortColors(nums){
    let temp;
    let start = 0;
    let end = nums.length - 1;
    for (let i=0; i<=end; i++) {
        while (nums[i] === 2 && i!== end) {
            temp = nums[end];
            nums[end] = nums[i];
            nums[i] = temp;
            end--;
        }
        while(nums[i] === 0 && i !== start) {
            temp = nums[start];
            nums[start] = nums[i];
            nums[i] = temp;
            start++;
        }
    }
    return nums;
};

module.exports = sortColors;
