const candies = require('./candies');

test('[2, 3, 5, 1, 3], 3 returns [true, true, true, false, true]', () => {
    expect(candies([2, 3, 5, 1, 3], 3)).toEqual([true, true, true, false, true]);
});

test('[12, 1, 12], 10 returns [true, false true]', () => {
    expect(candies([12, 1, 12], 10)).toEqual([true, false, true]);
});