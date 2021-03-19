function rotateImage(matrix) {
    let temp;

    // Step One: Transpose Matrix

    for (let i = 0; i< matrix.length; i++) {
        for (let j = i; j<matrix.length; j++) {
            temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }

    // Step Two: Flip Horizontally

    for (let i = 0; i<matrix.length; i++) {
         matrix[i] = matrix[i].reverse();
    }
}

rotateImage([[1,2,3],[4,5,6],[7,8,9]]);