const addBorder = require('./addBorder');

test('["abc", "ded"] returns ["*****", "*abc*", "*ded*", "*****"]', () => {
    expect(addBorder(["abc", "ded"])).toEqual(["*****", "*abc*", "*ded*", "*****"])
});