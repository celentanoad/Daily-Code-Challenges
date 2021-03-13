function singleNumber(nums) {
    let noDuplicates = [];
    for (let i of nums) {
        if (noDuplicates.includes(i)) noDuplicates.splice(noDuplicates.indexOf(i), 1);
        else noDuplicates.push(i);
    }
    return noDuplicates[0];
}