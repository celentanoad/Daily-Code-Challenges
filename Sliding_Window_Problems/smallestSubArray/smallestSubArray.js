// Given an array of positive integers and a number "S", find the length of the smallest contiguous subarray whose sum is greater than or equal to "S". Return 0 if no such subarray exists.
//Ex: Input: [2, 1, 5, 2, 3, 2], S=7 returns 2 because the smallest subarray which a sum greater than or equal to 7 is [5, 2] which has a length of 2

function smallestSubArray(array, s) {
    smallestWindow = Infinity;
    windowStart = 0;
    windowSum = 0;

    for (let windowEnd = 0; windowEnd < array.length; windowEnd++) {
        windowSum += array[windowEnd];
        while (windowSum >= s) {
            smallestWindow = Math.min(smallestWindow, windowEnd - windowStart + 1);
            windowSum -= array[windowStart];
            windowStart++;
        }
    }
    if (smallestWindow === Infinity) return 0;
    return smallestWindow;
}

// time complexity is O(N)- the outer loop runs through all the elements in the array, and the inner loop (while) only processes each element once

module.exports = smallestSubArray;