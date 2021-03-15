function isValidSudoku(board) {
    let rows = {};
    let columns = {};
    let boxes = {};
    
    for (let i = 0; i< 9; i++) {
      for (let j = 0; j< 9; j++) {
          let num = board[i][j];
          if (num === '.') continue;
          let boxIndex = Math.floor((i / 3)) * 3 + Math.floor(j / 3);
          console.log(rows);
          console.log(columns);
          console.log(boxes);
          if (rows[`${i}${num}`] || columns[`${j}${num}`] || boxes[`${boxIndex}${num}`]) return false;
          else {
              rows[`${i}${num}`] = 1;
              columns[`${j}${num}`] = 1;
              boxes[`${boxIndex}${num}`] = 1;
            }
        }
    }
    return true;
}

console.log(isValidSudoku([["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]))