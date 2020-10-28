// A sorted array of distinct integers shiftArr is shifted to the left by an unknown ofset
// Ex: the sequence [1, 2, 3, 4, 5] becomes [3, 4, 5, 1, 2] after being shifted twice
// Given shiftArr and integer num, implement a function shiftedArrSearch
    // that finds and returns the index of num in shiftArr
// If num is not found, return -1

// Ex: 
// shiftedArrSearch([9, 12, 17, 2, 4, 5], 2)
// returns 3


function shiftedArrSearch(shiftArr, num) {
    let pivot = findPivotPoint(shiftArr);
    if (pivot === 0 && shiftArr[0] === num) return pivot
    // pivot is the point where numbers are split (pivot - end of array is lower, 0- 1 less than pivot is higher)
    if (num < shiftArr[0]) {
        for (let i = pivot; i< shiftArr.length; i++) {
            if (shiftArr[i] === num) return i
        }
    } else {
        for (let i = 0; i< pivot; i++) {
            if (shiftArr[i] === num) return i
        }
    }
    return -1
}

function findPivotPoint(shiftArr) {
    let begin = 0; 
    let end = shiftArr.length - 1; 
    while (begin <= end) {
        let mid = begin + Math.floor((end - begin) / 2) 
        if (mid === 0 || shiftArr[mid] < shiftArr[mid - 1]) return mid;
        if (shiftArr[mid] > shiftArr[0]) begin = mid + 1
        else end = mid - 1
    }
    return 0;
}

console.log(shiftedArrSearch([9, 12, 17, 2, 4, 5], 2)) // returns 3
console.log(shiftedArrSearch([2], 2)) // returns 0
console.log(shiftedArrSearch([1, 2], 2)) // returns 1
console.log(shiftedArrSearch([0, 1, 2, 3, 4, 5], 1)) // returns 1