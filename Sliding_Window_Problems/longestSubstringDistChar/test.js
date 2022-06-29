const longestSubstring = require('./longestSubstringDistChar');

test('"araaci", K=2 returns 4', () => {
    expect(longestSubstring("araaci", 2)).toEqual(4);
});

test('"araaci", K=1 returns 2', () => {
    expect(longestSubstring("araaci", 1)).toEqual(2);
});

test('"cbbebi", K=3 returns 5', () => {
    expect(longestSubstring("araaci", 3)).toEqual(5);
});

test('"cbbebi", K=10 returns 2', () => {
    expect(longestSubstring("cbbebi", 10)).toEqual(6);
});