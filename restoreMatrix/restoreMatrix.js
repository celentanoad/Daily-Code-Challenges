function restoreMatrix(rowSum, colSum) {
    // find smallest number out of rowSum and colSum and store in variable x
    // place x in the grid and subtract x from rowSum and colSum
    // create empty matrix of rowSum.length x colSum.length
    
    let matrix = new Array(rowSum.length).fill(0).map(() => new Array(colSum.length).fill(0));
    let value;

    for (let i = 0; i<rowSum.length; i++) {
        for (let j = 0; j<colSum.length; j++) {
            value = Math.min(rowSum[i], colSum[j]);
            matrix[i][j] = value;
            rowSum[i] -= value;
            colSum[j] -= value;
        }
    }
    return matrix;
};

console.log(restoreMatrix([14,9], [6, 9, 8]));
