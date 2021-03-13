function plusOne(digits) {
    // let newNumber = digits.join('');
    // console.log(newNumber);
    // newNumber = parseInt(newNumber);
    // console.log(newNumber);
    // let result = [];
    // newNumber = newNumber.toString().split('');
    // for (let i of newNumber) {
    //     result.push(parseInt(i));
    // }
    // return result;


    for (let i = digits.length -1; i>=0; i--) {
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        } else {
            digits[i] = 0;
        }
    }
    digits[0]=1;
    digits[digits.length]=0;
    return digits;
}

console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]))