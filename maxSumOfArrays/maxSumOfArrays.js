// sum ALL the things! Anything that is a number

function arraySum(arr) {
    let sum = 0;
    function getSum(arr) {
        for (let num of arr) {
            if (Array.isArray(num)) getSum(num);
            else if (!isNaN(num)) sum += num;
        }
    }
    getSum(arr);
    return sum;
}

module.exports = arraySum;
