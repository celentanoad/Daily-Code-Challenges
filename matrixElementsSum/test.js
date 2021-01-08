const { TestScheduler } = require('jest');
const matrixElementsSum = require('./matrixElementsSum');

test('[[0, 1, 1, 2], [0, 5, 0, 0], [2, 0, 3, 3]] returns 9', () => {
    expect(matrixElementsSum([[0, 1, 1, 2], [0, 5, 0, 0], [2, 0, 3, 3]])).toEqual(9);
});

test('[[1,1,1], [2,2,2], [3,3,3]] returns 18', () => {
    expect(matrixElementsSum([[1,1,1], [2,2,2], [3,3,3]])).toEqual(18);
});

test('[[1,2,3,4,5]] returns 15', () => {
    expect(matrixElementsSum([[1,2,3,4,5]])).toEqual(15);
});

test('[[1]] returns 1', () => {
    expect(matrixElementsSum([[1]])).toEqual(1);
});

test('[[4,0,1], [10,7,0], [0,0,0], [9,1,2]] returns 15', () => {
    expect(matrixElementsSum([[4,0,1], [10,7,0], [0,0,0], [9,1,2]])).toEqual(15);
});