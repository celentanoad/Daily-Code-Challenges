//Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

//You may assume no duplicates in the array.

function searchInsert(nums, target) {
    let low = 0;
    let high = nums.length - 1;
    let mid;
    let index = nums.length;
    while (low <= high) {
        mid = Math.floor((low + high)/2);
        if(nums[mid] < target) {
            low = mid + 1;
        } else if (nums[mid] > target) {
            high = mid - 1;
            index = mid;
        } else {
            return mid;
        }
    }
    return index;
}
