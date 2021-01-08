// Given a matrix, return the number of items in the matrix that are not 0 or below a value of 0
// Example: 
// [[0, 1, 1, 2],
//  [0, 5, 0, 0],
//  [2, 0, 3, 3]]
// In this example, we add the values 1, 1, 2, and 5 to return 9

// Example 2:
// [[1, 1, 1, 0], 
// [0, 5, 0, 1], 
// [2, 1, 3, 10]]
// This example would return 9 because the 1 and the 10 in the last column are below a 0 so they would not count
// 1 + 1 + 1 + 5 + 1 = 9

function matrixElementsSum(matrix) {
    // define results variable
    // define indexOfZeroes array
    // loop through first array and add to results
    // if we find a 0, store the index of that value in the array
    // move onto next array and do the same but skip if i = any of the indeces in the indexOfZeroes array

    let result = 0;
    let indexOfZeroes = [];

    function findZeroes(array) {
        for (let i = 0; i<array.length; i++) {
            if (array[i] === 0) indexOfZeroes.push(i);
            else if (!indexOfZeroes.includes(i)) result += array[i];
        }
        return result;
    }

    for (let array of matrix) {
        findZeroes(array);
    }
    return result;
}

module.exports = matrixElementsSum;