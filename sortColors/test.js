const sortColors = require('./sortColors');

test('Input: [2,0,2,1,1,0], Output: [0,0,1,1,2,2]', () => {
    expect(sortColors([2, 0, 2, 1, 1, 0])).toEqual([0, 0, 1, 1, 2, 2]);
});

test('Input: [2, 2, 1, 0, 1, 2, 0], Output: [0, 0, 1, 1, 2, 2, 2]', () => {
    expect(sortColors([2, 2, 1, 0, 1, 2, 0])).toEqual([0, 0, 1, 1, 2, 2, 2]);
});

