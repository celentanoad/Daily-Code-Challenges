// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array.  There can be negative numbers in the array, but it will always be sorted.
// countUniqueValues([1,1,1,1,2]) //2
// countUniqueValues([1,2,3,4,4,4,4,7,7,12,12,13]) //7
// countUniqueValues([]) //0
// countUniqueValues([-2,-1,-1,0,1]) //4

function countUniqueValues(array) {
    if (!array.length) return 0;
    let total = 1
    for (let i = 1; i < array.length; i++) {
        if (array[i] === array[i-1]) continue;
        else total += 1
    }
    return total
}

console.log(countUniqueValues([1,2,3,4,4,4,4,7,7,12,12,13]))