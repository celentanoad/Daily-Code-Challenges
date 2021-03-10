const palindromeRearranging = require('./palindromeRearranging');

test('"aabb" returns true', () => {
    expect(palindromeRearranging("aabb")).toEqual(true);
});

test('"abdhuierf" returns false', () => {
    expect(palindromeRearranging("abdhuierf")).toEqual(false);
});

test('"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbccccaaaaaaaaaaaaa" returns false', () => {
    expect(palindromeRearranging("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbccccaaaaaaaaaaaaa")).toEqual(false);
});