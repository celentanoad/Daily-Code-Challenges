// First solution

// function containsDuplicate(nums) {
//     let sorted = nums.sort((a, b) => a-b)
//     for (let i = 0; i< nums.length-1; i++) {
//         if (sorted[i] === sorted[i+1]) return true;
//     }
//     return false;
// }

// Alternate solution

function containsDuplicate(nums) {
    let hash = {};
    for (let num of nums) {
        if (hash[num]) return true;
        else hash[num] = 1;
    }
    return false;
}