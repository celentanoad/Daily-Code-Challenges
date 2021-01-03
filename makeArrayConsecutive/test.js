const makeArrayConsecutive = require('./makeArrayConsecutive');

test('[6, 2, 3, 8] returns 3', () => {
    expect(makeArrayConsecutive([6, 2, 3, 8])).toEqual(3);
});

test('[0, 3] returns 2', () => {
    expect(makeArrayConsecutive([0, 3])).toEqual(2);
});

test('[6, 3] returns 2', () => {
    expect(makeArrayConsecutive([6, 3])).toEqual(2);
});

test('[2, 3, 1] returns 0', () => {
    expect(makeArrayConsecutive([2, 3, 1])).toEqual(0);
});

test('[1] returns 0', () => {
    expect(makeArrayConsecutive([1])).toEqual(0);
});

