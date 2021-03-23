// Brute force solution:

function numMagicSquaresInside(grid) {
    let row = grid.length;
    let column = grid[0].length;
    function isMagic(a, b, c, d, e, f, g, h, i) {
        let nums = [a, b, c, d, e, f, g, h, i];
        if (nums.sort()[0] < 1 || nums.sort()[nums.length-1] > 9) return false;
        return (a+b+c === d+e+f === g+h+i === a+d+g === b+e+h === c+f+i === a+e+i === c+e+g);
    }
    let result = 0;
    for (let r = 0; r<row-2; r++) {
        for (let c = 0; c<column-2; c++) {
            if (grid[r+1][c+1] !== 5) continue;
            if (isMagic(grid[r][c], grid[r][c+1], grid[r][c+2], grid[r+1][c], grid[r+1][c+1], grid[r+1][c+2], grid[r+2][c], grid[r+2][c+1], grid[r+2][c+2])) result++;
        }
    }
    return result;
}