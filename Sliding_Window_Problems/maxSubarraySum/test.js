const maxSubarraySum = require('./maxSubarraySum');

test('[1,2,5,2,8,1,5], n=2 returns 10', () => {
    expect(maxSubarraySum([1,2,5,2,8,1,5], 2)).toEqual(10);
});

test('[1,2,5,2,8,1,5], n=4 returns 17', () => {
    expect(maxSubarraySum([1,2,5,2,8,1,5], 4)).toEqual(17);
});

test('[4,2,1,6], n=1 returns 6', () => {
    expect(maxSubarraySum([4,2,1,6], 1)).toEqual(6);
});

test('[], n=4 returns null', () => {
    expect(maxSubarraySum([], 4)).toEqual(null);
});