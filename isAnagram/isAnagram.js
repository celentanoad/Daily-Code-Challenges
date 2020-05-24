function isAnagram(s, t) {
    if (s.length != t.length) return false;
    let charsA = {};
    let charsB = {};
    for (let char of s) {
        charsA[char] ? charsA[char]++ : charsA[char] = 1;
    }
    for (let char of t) {
        charsB[char] ? charsB[char]++ : charsB[char] = 1;
    } 
    for (let value in charsA) {
        if (charsA[value] !== charsB[value]) return false;
    }
    return true;
}
