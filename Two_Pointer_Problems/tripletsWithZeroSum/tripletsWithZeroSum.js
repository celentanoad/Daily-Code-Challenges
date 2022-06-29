// Given an array of unsorted numbers, find all unique triplets in the array whose sum is zero. The array may have duplicates

function tripletsWithZeroSum(arr) {
 // loop through array
    // skip duplicates
    // set our index
    // set left to i+1 and set right to arr.length -1
    // while left < right
        // get the sum of arr[i] + arr[right] + arr[left]
        // if sum is 0, then add sub array of those 3 numbers to our result
            // left++
            // right --
            // skip duplicates
                // check if left -1 equals new left
                    // if so then increment left once more
                // check if right +  equals new right
                    // if so then decrement right again
        // if sum < 0
            // left ++
        // else right--
    // return new array

    arr.sort((a, b) => a-b);
    let triplets = [];

    for (let i = 0; i<arr.length-2; i++) {
        if (i > 0 && arr[i] === arr[i-1]) continue;

        let left = i+1;
        let right = arr.length-1;

        while (left < right) {
            let sum = arr[i] + arr[left] + arr[right];

            if (sum === 0) {
                triplets.push([arr[i], arr[left], arr[right]]);
                left++;
                right--;
                while (left < right && arr[left-1] === arr[left]) {
                    left++;
                } 
                while (left < right && arr[right+1] === arr[right]) {
                    right--;
                } 
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            } 
        }
    }
    return triplets;
}

module.exports = tripletsWithZeroSum;