const areSimilar = require('./areSimilar');

test('[1, 2, 3] and [1, 2, 3] returns true', () => {
    expect(areSimilar([1, 2, 3], [1, 2, 3])).toEqual(true);
});

test('[1, 2, 3] and [1, 3, 2] returns true', () => {
    expect(areSimilar([1, 2, 3], [1, 3, 2])).toEqual(true);
});

test('[1, 1, 2] and [1, 2, 2] returns false', () => {
    expect(areSimilar([1, 1, 2], [1, 2, 2])).toEqual(false);
});

test('[1, 2, 2] and [2, 1, 1] returns false', () => {
    expect(areSimilar([1, 2, 2], [2, 1, 1])).toEqual(false);
});