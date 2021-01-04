const { TestScheduler } = require('jest');
const firstUniqueChar = require('./firstUniqueChar');

test('leetcode returns 0', () => {
    expect(firstUniqueChar('leetcode')).toEqual(0);
});

test('loveleetcode returns 2', () => {
    expect(firstUniqueChar('loveleetcode')).toEqual(2);
});

test('peep returns 01', () => {
    expect(firstUniqueChar('peep')).toEqual(-1);
});