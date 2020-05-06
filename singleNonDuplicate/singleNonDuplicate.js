//You are given a sorted array 
//consisting of only integers where 
//every element appears exactly twice,
//except for one element which appears exactly once. 
//Find this single element that appears only once.


function singleNonDuplicate(nums) {
    function binarySearch(start, end) {
        const middle = Math.floor((start + end) / 2);
        if (nums[middle + 1] === nums[middle]) {
            if (middle % 2 === 0) {
                return binarySearch(middle + 1, end)
            } else {
                return binarySearch(start, middle)
            }
        }
        else if (nums[middle -1]===nums[middle]) {
            if (middle % 2 === 0) {
                return binarySearch(start, middle)
            } else {
                return binarySearch(middle +1, end)
            }
        } else {
            return nums[middle]
        }
    }
    return binarySearch(0, nums.length)
};

console.log(singleNonDuplicate([3,3,7,7,10,11,11]))