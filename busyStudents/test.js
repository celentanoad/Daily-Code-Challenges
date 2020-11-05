const { expect, test } = require('@jest/globals');
const busyStudents = require('./busyStudents');

test('busyStudents function exists', () => {
    expect(typeof busyStudents).toEqual('function');
});

test('[4],[4], 4 returns 1', () => {
    expect(busyStudents([4],[4], 4)).toEqual(1);
});

test ('[4],[4], 5 returns 0', () => {
    expect(busyStudents([4],[4], 5)).toEqual(0);
});

test('[1, 2, 3],[3, 2, 7],4', () => {
    expect(busyStudents([1, 2, 3],[3, 2, 7],4)).toEqual(1);
});