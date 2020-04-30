function isValidSudoku(board) {
    let y = 0;
    let x = 0;
    let currentValue = board[x][y];
    function checkRow(currentValue) {
        while (y < 9) {
            console.log("y = " + y)
            for (let x = 1; x< 9; x++) {
                console.log("x = " + x)
                if (board[x][y] === currentValue) {
                    return false;
                }
                else {
                    y += 1;
                    checkRow(currentValue);
                }
            }
        return true;
        }
    }
    function checkColumn(currentValue) {
        currentValue = board[x][y];
        for (let y = 1; y < 9; y++) {
            if (board[x][y] === currentValue) {
                return false;
            }
            else {
                while (x < 7) {
                    x += 1;
                    checkColumn(currentValue)
                }
            }
        }
        return true;
    }
    if (checkRow(currentValue) && checkColumn(currentValue)) {
        console.log(true);
        return true;
    }
    else {
        console.log(false);
        return false;
    }
};

isValidSudoku([["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]])