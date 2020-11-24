// Given a string S of lowercase letters, a duplicate removal consists of choosing two adjacent and equal letters, and removing them.

// We repeatedly make duplicate removals on S until we no longer can.

// Return the final string after all such duplicate removals have been made.  It is guaranteed the answer is unique.

function removeDuplicates(string) {
    let newString = string.split('');
    let result = helper(newString);
    function helper(newString) {
        let noDuplicates = true;
        for (let i = 1; i<newString.length; i++) {
            if (newString[i] === newString[i-1]) {
                newString.splice(i-1, 2);
                noDuplicates = false;
            }
        }
        if (!noDuplicates) helper(newString);
        return newString;
    }
    // convert string to array
    // write a recursive function that calls itself over the new string until it returns a value with no duplicates
    // call function on array
    //store updated value and call function again
    return result.join('');
}

module.exports = removeDuplicates;