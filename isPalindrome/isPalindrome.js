function isPalindrome(s) {
    let reverseString = [];
    let stringArray = s.toLowerCase().replace(/[^A-Za-z0-9]/g, '').split('');
    let i = stringArray.length-1;
    function reverse(char) {
        if (stringArray.length === reverseString.length) return;
        reverseString.push(char);
        i--;
        reverse(stringArray[i]);
    }
    reverse(stringArray[i]);
    return (reverseString.join('') === stringArray.join(''))
}

console.log(isPalindrome('A man a plan a canal _Panama'));