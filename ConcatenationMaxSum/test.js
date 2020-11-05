const { test, expect } = require('@jest/globals');
const concatSum = require('./concatenationMaxSum');

test('arr = [1,2] and k = 3 returns [1, 2, 1, 2, 1, 2]', () => {
    expect(concatSum([1, 2], 3)).toEqual(9);
});
