const matrixDiagonalSums = require('./matrixDiagonalSums');

test('[ [1, 2, 3], [4, 5, 6], [7, 8, 9] ] returns [15, 15]', () => {
    expect(matrixDiagonalSums([ [1, 2, 3], [4, 5, 6], [7, 8, 9] ])).toEqual([15, 15]);
});

test('[[20, 40], [10, 60]] returns [80, 50]', () => {
    expect(matrixDiagonalSums([[20, 40], [10, 60]])).toEqual([80, 50]);
}); 