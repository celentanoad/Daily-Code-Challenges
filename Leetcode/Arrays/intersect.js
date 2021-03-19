// First Solution:

// function intersect(nums1, nums2) {
//     let count = {};
//     let result = [];
//     for (let i of nums1) {
//         if (count[i]) count[i]++;
//         else count[i] = 1;
//     }
//     for (let i of nums2) {
//         if (count[i] >= 1) {
//             result.push(i);
//             count[i]--;
//         }
//     }
//     return result;
// }

// Alternate slightly faster solution:

function intersect(nums1, nums2) {
    let result = [];
    let num1 = 0;
    let num2 = 0;
    nums1.sort((a, b) => a-b);
    nums2.sort((a, b) => a-b);

    while (num1 < nums1.length && num2 < nums2.length) {
        if (nums1[num1]===nums2[num2]) {
            result.push(nums1[num1]);
            num1++;
            num2++
        } else if (nums1[num1] < nums2[num2]) num1++;
        else num2++;
    }
    return result;
}
