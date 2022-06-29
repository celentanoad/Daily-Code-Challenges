// Given an array of numbers sorted in increasing order, return a new array containing squares of all the numbers of the input array sorted in increasing order

function squaredArray(arr) {
    let squared = [];
    let left = 0;
    let right = arr.length-1;

    while (left <= right) {
        let leftSquared = arr[left] * arr[left]
        let rightSquared = arr[right] * arr[right]

        if (leftSquared > rightSquared) {
            squared.unshift(leftSquared);
            left++;
        } else {
            squared.unshift(rightSquared);
            right--;
        }
    }
    return squared;
}

module.exports = squaredArray;