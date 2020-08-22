function longestValidParenthesis(s) {
    let left = 0;
    let right = 0;
    let longest = 0;
    let results = [];
    for (let i = 0; i< s.length; i++) {
        if (s[i] === "(") {
            left++;
        } else {
            right++;
        }

        if (left === right) {
            longest = left + right;
        } else if (right > left) {
            left = 0;
            right = 0;
        }
    }
    left = 0;
    right = 0;
    for (let j = s.length; j > 0; j--) {
        if (s[j] === "(") {
            left++;
        } else {
            right++;
        }

        if (left === right) {
            longest = left + right;
        }

        if (left > right) {
            left = 0;
            right = 0;
        }

    }
    return longest;
}

console.log(longestValidParenthesis('(()'));