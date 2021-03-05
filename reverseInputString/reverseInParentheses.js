function reverseInParentheses(inputString) {
    let idxOfOpen;
    let word = '';
    let result = '';
    for (let i = 0; i<inputString.length; i++) {
        if (inputString[i] === '(') {
            idxOfOpen = i;
        }
        else if (inputString[i] === ')') {
            word = inputString.substring(idxOfOpen + 1, i);
            result = inputString.substring(0, idxOfOpen) + word.split('').reverse().join('') + inputString.substring(i+1);
            return reverseInParentheses(result);
        }
        else result += inputString[i];
    }
    return result;
}

module.exports = reverseInParentheses;