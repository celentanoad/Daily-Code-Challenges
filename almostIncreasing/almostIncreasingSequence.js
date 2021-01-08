// Given a sequence of integers in an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array
// If the sequence contains only one element, it is considered to be strictly increasing

function almostIncreasingSequence(sequence) {
    // loop through the array
    // if next element is less than previous element, add counter and check the element after
    // if counter reaches 2 then return false
    let counter = 0;
    for (let i = 1; i<sequence.length; i++) {
        if (sequence[i] <= sequence[i-1]) {
            counter++;
            if (counter > 1) return false;
            if (sequence[i] <= sequence[i-2] && sequence[i+1] <= sequence[i-1]) return false;
        }
    }
    return true;
}

module.exports = almostIncreasingSequence;