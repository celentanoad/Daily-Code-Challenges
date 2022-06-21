// given an array of positive and negative integers, find the total number of distinct absolute values

// solution without using sliding window:

function distinctAbsValInefficient(array) {
    let nums = {}
    for (let num of array) {
        num = Math.abs(num)
        if (nums[num]) nums[num]++;
        else nums[num] = 1
    }
    return Object.keys(nums).length;
}

// Above solution isn't as efficient because it's complexity is O(n).  It is possible to solve this with O(1) complexity, since the array is already sorted.

function distinctAbsVal(array) {
    // first set the initial count to the length of the array

    let result = array.length;

    // set the windowStart to the beginning of the array and the windowEnd to the end of the array

    let windowStart = 0;
    let windowEnd = array.length - 1;

    // loop until windowStart > windowEnd

    while (windowStart < windowEnd) {
        // remove any duplicate elements from the left and right of the current window and decrease the count for each duplicate found
        while (windowStart < windowEnd && array[windowStart] === array[windowStart + 1]) {
            result--;
            windowStart++;
        }
        while (windowEnd > windowStart && array[windowEnd] === array[windowEnd - 1]) {
            result--;
            windowEnd--;
        }
        // exit the loop if there is only one element left
        if (windowStart === windowEnd) {
            break;
        }
        let sum = array[windowStart] + array[windowEnd];
        // check if the sum of the windowStart and windowEnd is 0 (to remove duplicate absValue)
        if (sum === 0) {
            result--;
            windowStart++;
            windowEnd--;
        }
        // if the sum is negative, increment windowStart
        else if (sum < 0) {
            windowStart++;
        }
        // if sum is posiitve, decrement windowEnd
        else if (sum > 0) {
            windowEnd--;
        }
    }
    // return the final count
    return result;
}

module.exports = distinctAbsVal;