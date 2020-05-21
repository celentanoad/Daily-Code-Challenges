function singleNumber (nums) {

    let newArr = [];
    let arrIndex;
    for (let i = 0; i<nums.length; i++) {
        if (newArr.includes(nums[i])) {
            arrIndex = newArr.indexOf(nums[i]);
            newArr.splice(arrIndex, 1);
            console.log(`removed ${newArr[arrIndex]}`)
        } else {
            newArr.push(nums[i]);
            console.log(`pushed ${nums[i]}`)
        }
    }
    return newArr;
}

console.log(singleNumber([4, 1, 2, 1, 2]));
