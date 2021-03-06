const alternatingSums = require('./alternatingSums');

test('[50, 60, 60, 45, 70] returns [180, 105', () => {
    expect(alternatingSums([50, 60, 60, 45, 70])).toEqual([180, 105]);
});