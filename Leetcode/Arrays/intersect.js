function intersect(nums1, nums2) {
    let count = {};
    let result = [];
    for (let i of nums1) {
        if (count[i]) count[i]++;
        else count[i] = 1;
    }
    for (let i of nums2) {
        if (count[i] >= 1) {
            result.push(i);
            count[i]--;
        }
    }
    return result;
}

