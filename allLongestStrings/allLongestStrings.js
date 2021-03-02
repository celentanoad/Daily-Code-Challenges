function allLongestStrings(inputArray) {
    let result = [];
    let longestLength = 0;
    for (let string of inputArray) {
        if (string.length > longestLength) {
            longestLength = string.length;
        }
    }
    for (let string of inputArray) {
        if (string.length === longestLength) result.push(string)
    }
    return result;
}

module.exports = allLongestStrings;