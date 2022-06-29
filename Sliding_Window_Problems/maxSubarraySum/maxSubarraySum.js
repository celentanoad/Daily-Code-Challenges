//Write a function called maxSubarraySum which accepts an array of integers and a number called n.  The function should calculate the maximum sum of n consecutive elements.
// console.log(maxSubarraySum([1,2,5,2,8,1,5],2)) // 10
// console.log(maxSubarraySum([1,2,5,2,8,1,5],4)) // 17
// console.log(maxSubarraySum([4,2,1,6],1)) // 6
// console.log(maxSubarraySum([], 4)) // null

// Initial solution
// function maxSubarraySum(array, n) {
//     if (array.length < n) return null
//     let maxSum = 0;

//     for (let i = 0; i<n; i++) {
//         maxSum += array[i]
//     }
//     let sum = maxSum;
    
//     for (let i = n; i<array.length; i++) {
//         sum = sum + array[i] - array[i-n]
//         maxSum = Math.max(maxSum, sum);
//     }
//     return maxSum;
// }

// Solution using sliding window

function maxSubarraySum(array, n) {
    if (array.length < n) return null
    let maxSum = 0,
        windowSum = 0,
        windowStart = 0;

        //rather than iterate over array with i, use windowEnd to represent the end of the window that is being calculated
        // does the same thing, just named in a more specific way
    for (let windowEnd = 0; windowEnd <array.length; windowEnd++) {
        windowSum += array[windowEnd] // adds the next element
        if (windowEnd >= n-1) { // check if the window is the length of the sub array
            maxSum = Math.max(maxSum, windowSum);
            windowSum -= array[windowStart];
            windowStart++;
        }
    }
    return maxSum;
}

module.exports = maxSubarraySum;