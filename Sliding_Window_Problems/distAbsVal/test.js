const distinctAbsVal = require('./distAbsVal');

test('[-1, -1, 0, 1, 1, 1] returns 2', () => {
    expect(distinctAbsVal([-1, -1, 0, 1, 1, 1])).toEqual(2);
});

test('[-2, -1, 0, 1, 2, 3] returns 4', () => {
    expect(distinctAbsVal([-2, -1, 0, 1, 2, 3])).toEqual(4);
});

test('[-1, -1, -1, -1] returns 1', () => {
    expect(distinctAbsVal([-1, -1, -1, -1])).toEqual(1);
});

