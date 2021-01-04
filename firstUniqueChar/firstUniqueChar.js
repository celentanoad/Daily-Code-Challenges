// Given a string, find the first non-repeating character in it and return its inde.  If it doesn't exist, return -1

function firstUniqueChar(s) {
    const letters = {};
    for (let char of s) {
        if (letters[char]) letters[char]++;
        else letters[char] = 1;
    }

    for (let letter in letters) {
        if (letters[letter] === 1) return s.indexOf(letter);
    }
    return -1;
}

module.exports = firstUniqueChar;