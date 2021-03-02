const almostIncreasingSequence = require('./almostIncreasingSequence');

test('[1, 3, 2, 1] returns false', () => {
    expect(almostIncreasingSequence([1, 3, 2, 1])).toEqual(false);
});

test('[1, 3, 2] returns true', () => {
    expect(almostIncreasingSequence([1, 3, 2])).toEqual(true);
});

test('[1] returns true', () => {
    expect(almostIncreasingSequence([1])).toEqual(true);
});

test('[1, 2, 1, 2] returns false', () => {
    expect(almostIncreasingSequence([1, 2, 1, 2])).toEqual(false);
});

test('[3, 6, 5, 8, 10, 20, 15] returns false', () => {
    expect(almostIncreasingSequence([3, 6, 5, 8, 10, 20, 15])).toEqual(false);
});

test('[1, 1, 2, 3, 4, 4] returns false', () => {
    expect(almostIncreasingSequence([1, 1, 2, 3, 4, 4])).toEqual(false);
});

test('[10, 1, 2, 3, 4, 5] returns true', () => {
    expect(almostIncreasingSequence([10, 1, 2, 3, 4, 5])).toEqual(true);
});

test('[1, 1, 1, 2, 2] returns false', () => {
    expect(almostIncreasingSequence([1, 1, 1, 2, 3])).toEqual(false);
});

