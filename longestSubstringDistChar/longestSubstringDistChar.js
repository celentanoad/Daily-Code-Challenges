// Given a string, find the length of the longest substring with no more than K distinct characters

function longestSubstringDistChar(string, k) {
// create a hash to find K distinct characters (build hash until length === k)
// keep track of the length of the window when hash.length === k
// slide windowEnd over until length > k
// if hash.length > k, then slide windowStart over until it is no longer larger (so use a while loop for this)
// remove characters from the hash if they are === 0
// at the end of each step, compare current window size to the maxSize so far and keep track of the longest length
// return the longest window size

    let chars = {},
        windowStart = 0,
        longestSubstring = 0

    for (let windowEnd = 0; windowEnd < string.length; windowEnd++) {
        let rightChar = string[windowEnd];
        if (!chars[rightChar]) chars[rightChar] = 0
        chars[rightChar]++;
        
        while (Object.keys(chars).length > k) {
            let leftChar = string[windowStart]
            chars[leftChar] -=1
            if (chars[leftChar] === 0) delete chars[leftChar]
            windowStart++
        }
        longestSubstring = Math.max(longestSubstring, windowEnd - windowStart + 1)
    }
    return longestSubstring;
}

module.exports = longestSubstringDistChar;