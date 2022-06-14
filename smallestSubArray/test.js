const smallestSubArray = require('./smallestSubArray');

test('[2, 1, 5, 2, 3, 2], S=7 returns 2', () => {
    expect(smallestSubArray([2, 1, 5, 2, 3, 2], 7)).toEqual(2);
});

test('[2, 1, 5, 2, 8], S=7 returns 1', () => {
    expect(smallestSubArray([2, 1, 5, 2, 8], 7)).toEqual(1);
});

test('[3, 4, 1, 1, 6], S=8 returns 3', () => {
    expect(smallestSubArray([3, 4, 1, 1, 6], 8)).toEqual(3);
});


