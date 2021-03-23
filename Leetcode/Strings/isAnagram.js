function isAnagram(stringA, stringB) {
    return cleanString(stringA) === cleanString(stringB);
    function cleanString(string) {
        return string.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
    }
}