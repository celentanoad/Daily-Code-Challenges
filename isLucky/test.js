const isLucky = require('./isLucky');

test('1230 returns true', () => {
    expect(isLucky(1230)).toEqual(true);
});

test('239017 returns false', () => {
    expect(isLucky(239017)).toEqual(false);
});

test('123321 returns true', () => {
    expect(isLucky(123321)).toEqual(true);
});

test('100000 returns false', () => {
    expect(isLucky(100000)).toEqual(false);
});