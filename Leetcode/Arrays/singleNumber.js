// First solution
// function singleNumber(nums) {
//     let noDuplicates = [];
//     for (let i of nums) {
//         if (noDuplicates.includes(i)) noDuplicates.splice(noDuplicates.indexOf(i), 1);
//         else noDuplicates.push(i);
//     }
//     return noDuplicates[0];
// }

// Alternate, faster solution

function singleNumber(nums) {
    let hash = {};
    for (let i of nums) {
        if (hash[i]) hash[i]++;
        else hash[i] = 1;
    }
    for (let num in hash) {
        if (hash[num] === 1) return num;
    }
}