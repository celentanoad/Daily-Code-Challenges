function palindromeRearranging(inputString) {
    let letters = {};
    for (let letter of inputString) {
        if (letters[letter]) {
            letters[letter]++;
        }
        else {
            letters[letter] = 1;
        }
    }
    let counter = 0;
    for (let letter in letters) {
        if (letters[letter] % 2 !== 0) counter++;
        if (counter === 2) return false;
    }
    return true;
}

module.exports = palindromeRearranging;