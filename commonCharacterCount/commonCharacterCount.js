function commonCharacterCount(s1, s2) {
    let chars = {};
    let count = 0;
    for (let letter of s1) {
        if (chars[letter]) chars[letter]++;
        else chars[letter] = 1;
    }
    for (let letter of s2) {
        if (chars[letter]) {
            count++;
            chars[letter]--
        }
        
    }
    return count;
}

module.exports = commonCharacterCount;