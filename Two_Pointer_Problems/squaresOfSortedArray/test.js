const squaredArray = require('./squaredArray');

test('[-5, -2, -1, 0, 4, 6] returns [0, 1, 4, 16, 25, 36]', () => {
    expect(squaredArray([-5, -2, -1, 0, 4, 6])).toEqual([0, 1, 4, 16, 25, 36]);
});

test('[-5, -4, -3, -2, -1] returns [1, 4, 9, 16, 25]', () => {
    expect(squaredArray([-5, -4, -3, -2, -1])).toEqual([1, 4, 9, 16, 25]);
});

test('[1, 2, 3, 4, 5] returns [1, 4, 9, 16, 25]', () => {
    expect(squaredArray([1, 2, 3, 4, 5])).toEqual([1, 4, 9, 16, 25]);
});