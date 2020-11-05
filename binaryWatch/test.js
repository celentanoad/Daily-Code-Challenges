const { test, expect } = require('@jest/globals');
const readBinaryWatch = require('./binaryWatch');

test('binary function exists', () => {
    expect(typeof readBinaryWatch).toEqual('function');
});