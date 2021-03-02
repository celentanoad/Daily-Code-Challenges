const commonCharacterCount = require('./commonCharacterCount');

test('"aabcc" and "adcaa" returns 3', () => {
    expect(commonCharacterCount("aabcc", "adcaa")).toEqual(3);
});

test('"zzzz" and "zzzzzzz" returns 4', () => {
    expect(commonCharacterCount("zzzz", "zzzzzzz")).toEqual(4);
});

test('"a" and "b" returns 0', () => {
    expect(commonCharacterCount("a", "b")).toEqual(0);
});