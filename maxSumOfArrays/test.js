const arraySum = require('./maxSumOfArrays');

test('[2, 3, 1] returns 6', () => {
    expect(arraySum([2, 3, 1])).toEqual(6);
});

test('[4, 5, [0, 1, 0], banana] returns 10', () => {
    expect(arraySum([4, 5, [0, 1, 0], 'banana'])).toEqual(10);
}); 

test('[5, 2, [1, 0, 8], [2, [1, 1, 1], 10], 101] returns 132', () => {
    expect(arraySum([5, 2, [1, 0, 8], [2, [1, 1, 1], 10], 101])).toEqual(132);
});

test('[4, 5, [9, 4, sdflkjlsf, [0, 0, 2, 3,4 ,sdfjf, 9], 9,3 ,2]] returns 54', () => {
    expect(arraySum([4, 5, [9,4, "sdflkjlsf", [0, 0, 2, 3,4 ,'sdfjf',9], 9,3 ,2]])).toEqual(54);
});

