function isLucky(n) {
    let numbers = n.toString().split('');
    let count1 = 0;
    let count2 = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (i < numbers.length / 2) {
            count1 += parseInt(numbers[i]);
        } else {
            count2 += parseInt(numbers[i]);
        }
    }
    return count1 === count2
}

module.exports = isLucky;