const { test } = require('@jest/globals');
const letterTiles = require('./letterTiles');

test('tiles AAB returns 8', () => {
    expect(letterTiles("AAB")).toEqual(8);
});

test('tiles AAABBC returns 188', () => {
    expect(letterTiles("AAABBC")).toEqual(188);
});

test('tiles V returns 1', () => {
    expect(letterTiles("V")).toEqual(1);
});