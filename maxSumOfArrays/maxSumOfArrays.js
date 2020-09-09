

function arraySum(arr) {
    // sum ALL the things!
    let sum = 0;
    function getSum(arr) {
        for (let num of arr) {
            if (Array.isArray(num)) getSum(num);
            else if (!isNaN(num)) sum += num;
        }
    }
    getSum(arr)
    return sum;
}

console.log(arraySum([4, 5, [9,4, "sdflkjlsf", [0, 0, 2, 3,4 ,'sdfjf',9], 9,3 ,2]]));
