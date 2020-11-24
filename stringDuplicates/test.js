const removeDuplicates = require('./stringDuplicates');

test('string "abbaca" returns "ca"', () => {
    expect(removeDuplicates("abbaca")).toEqual('ca');
});

test('string "aab" returns "b"', () => {
    expect(removeDuplicates("aab")).toEqual('b');
});

test('string "abbccab" returns "b"', () => {
    expect(removeDuplicates("abbccab")).toEqual('b');
});