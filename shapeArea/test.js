const shapeArea = require('./shapeArea');

test('n = 2 returns 5', () => {
    expect(shapeArea(2)).toEqual(5);
});

test('n = 3 returns 13', () => {
    expect(shapeArea(3)).toEqual(13);
});

test('n = 8000 returns 127984001', () => {
    expect(shapeArea(8000)).toEqual(127984001);
});

test('n = 100 returns 19801', () => {
    expect(shapeArea(100)).toEqual(19801);
});

test('n = 9998 returns 199900013', () => {
    expect(shapeArea(9998)).toEqual(199900013);
});

test('n = 1 returns 1', () => {
    expect(shapeArea(1)).toEqual(1);
});
