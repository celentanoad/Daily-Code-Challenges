//Given an integer array arr and an integer k, 
//modify the array by repeating it k times.

//For example, if arr = [1, 2] and k = 3 
//then the modified array will be [1, 2, 1, 2, 1, 2].

//Return the maximum sub-array sum in the modified array. 
//Note that the length of the sub-array can be 0 and its sum in that case is 0.


function concatenationMaxSum(arr, k) {
    let numArray = [];
    let count = 0;
    let maxSum = 0;
    let sum = 0;
    while (count != k) {
        numArray = numArray.concat(arr);
        count ++;
    }
    for (let i = 0; i<numArray.length; i++) {
        sum += numArray[i];
        if (maxSum < sum) {
            maxSum = sum;
        } else if (sum < 0) {
            sum = 0;
        }
    }
    return maxSum;
}

module.exports = concatenationMaxSum;