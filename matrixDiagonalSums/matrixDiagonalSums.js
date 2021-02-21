// Given a square matrix of numbers, write a function to get the sum of the two diagonals
// Return an array with the values of each diagnonal

function matrixDiagonalSums(matrix) {
    let diagonal1 = 0;
    let diagonal2 = 0;
    let result = [];
    let startCol = 0;
    let endCol = matrix.length-1;

    for (let i = 0; i <matrix.length; i++) {
        diagonal1 += matrix[i][startCol];
        diagonal2 += matrix[i][endCol];
        startCol++;
        endCol--;
    }
    result.push(diagonal1, diagonal2);
    return result;
}

module.exports = matrixDiagonalSums;