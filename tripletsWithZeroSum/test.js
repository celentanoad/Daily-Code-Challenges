const tripletsWithZeroSum = require('./tripletsWithZeroSum');

test('[-5, 3, 2, -3, 1] returns [[-5, 3, 2], [2, -3, 1]]', () => {
    expect(tripletsWithZeroSum([-5, 3, 2, -3, 1])).toEqual([[-5, 2, 3], [-3, 1, 2]]);
});

test('[-1, -1, 2, -1, -1, 2, -1, -1, 2] returns [-1, -1, 2]', () => {
    expect(tripletsWithZeroSum([-1, -1, 2, -1, -1, 2, -1, -1, 2])).toEqual([[-1, -1, 2]]);
});

