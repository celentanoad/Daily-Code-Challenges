//Given a 2D board containing 'X' and 'O' (the letter O), capture all regions surrounded by 'X'.

//A region is captured by flipping all 'O's into 'X's in that surrounded region.

//Example:

//X X X X
//X O O X
//X X O X
//X O X X

//After running your function, the board should be:

//X X X X
//X X X X
//X X X X
//X O X X

//Explanation:

//Surrounded regions shouldn’t be on the border, which means that any 'O' on the border of the board are not flipped to 'X'. Any 'O' that is not on the border and it is not connected to an 'O' on the border will be flipped to 'X'. Two cells are connected if they are adjacent cells connected horizontally or vertically.


function solve(board) {
    if (board.length === 0) return;
    function DFS(row, column) {
        if (row >= board.length || row < 0 || column >= board[0].length || column < 0 || board[row][column] !== "O") return;
        board[row][column] = "I";
        DFS(row - 1, column);
        DFS(row+ 1, column);
        DFS(row, column + 1);
        DFS(row, column - 1);
    }

    for (let column = 0; column < board[0].length; column++) {
        if (board[0][column] === "O") DFS(0, column);
        if (board[board.length-1][column] === "O") DFS(board.length-1, column);
    }

    for (let row = 0; row < board.length; row++) {
        if (board[row][0] === "O") DFS(row, 0);
        if (board[row][board[0].length - 1] === "O") DFS(row, board[0].length - 1);
    }

    for (let row = 0; row < board.length; row++) {
        for (let column = 0; column < board[0].length; column++) {
            if (board[row][column] === "O") board[row][column] = "X";
            else if (board[row][column] === "I") board[row][column] = "O";
        }
    }
    return board;
}

