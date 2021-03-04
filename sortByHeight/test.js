const sortByHeight = require('./sortByHeight');

test('[-1, 150, 190, 170, -1, -1, 160, 180] returns [-1, 150, 160, 170, -1, -1, 180, 190]', () => {
    expect(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180])).toEqual([-1, 150, 160, 170, -1, -1, 180, 190]);
});