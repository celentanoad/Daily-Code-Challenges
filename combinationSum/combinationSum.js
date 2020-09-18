
//Find all possible combinations of k numbers that add up to a number n, given that only numbers from 1 to 9 can be used and each combination should be a unique set of numbers.

function combinationSum(k, n) {
    let result = [];
    let temp = [];
    if (k > n) return result;
    function getCombo(sum, k, temp, start, result) {
        if (sum === 0 & temp.length === k) result.push([...temp]);
        else if (sum < 0) return;
        else if (sum > 0 && temp.length === k) return;
        else {
            for (let i = start; i <= 9; i++) {
                temp.push(i);
                getCombo(sum - i, k, temp, i+1, result);
                temp.pop();
            }
        }
    }
    getCombo(n, k, temp, 1, result);
    return result;
}

console.log(combinationSum(3, 7));