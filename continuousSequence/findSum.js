//Contiguous Sequence: You are given an array of integers
// (both positive and negative). Find the
// contiguous sequence with the largest sum. Return the sum.

function findMaxSum(array) {
    let maxSum = 0;
    let currentMax = 0;
    let tempSum = 0;
    for(let i=0; i<array.length; i++) {
        for(let j = i; j<array.length; j++) {
            tempSum += array[j];
           maxSum = Math.max(maxSum, tempSum)
        }
        currentMax = 0;
        tempSum = 0;
    }
    console.log(maxSum);
}

findMaxSum([20, -8, -13, -2, 4, -10])