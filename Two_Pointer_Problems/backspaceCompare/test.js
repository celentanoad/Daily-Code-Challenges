const backspaceCompare = require('./backspaceCompare')

test('"ab#c" and "ad#c" returns true', () => {
  expect(backspaceCompare("ab#c", "ad#c")).toEqual(true);
});

test('"ab##" and "c#d#" returns true', () => {
  expect(backspaceCompare("ab##", "c#d#")).toEqual(true);
});

test('"a#c" and "b" returns false', () => {
  expect(backspaceCompare("a#c", "b")).toEqual(false);
});