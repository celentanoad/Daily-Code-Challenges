const allLongestStrings = require('./allLongestStrings');

test('["aba", "aa", "ad", "vcd", "aba"] returns ["aba", "vcd", "aba"]', () => {
    expect(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"])).toEqual(["aba", "vcd", "aba"]);
});

test('["onsfnib", "aokbcwthc", "jrfcw"] returns ["aokbcwthc"]', () => {
    expect(allLongestStrings(["onsfnib", "aokbcwthc", "jrfcw"])).toEqual(["aokbcwthc"]);
});

