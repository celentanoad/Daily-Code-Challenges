//Write a function called safeFrequency.  Given two positive integers, find out if the two numbers have the same frequency of digits.
//Your solution Must have the following complexities:  Time: O(N)
console.log(sameFrequency(182,281)) //true
console.log(sameFrequency(34,14)) //false
console.log(sameFrequency(3589578, 5879385)) //true
console.log(sameFrequency(22,222)) //false

function sameFrequency(num1, num2) {
    array1Obj = Object.create(null);
    array2Obj = Object.create(null);
    array1 = num1.toString().split('');
    array2 = num2.toString().split('');
    array1.forEach(num => {
        if (array1Obj[num]) array1Obj[num] += 1;
        else array1Obj[num] = 1
    })
    array2.forEach(num => {
        if (array2Obj[num]) array2Obj[num] += 1;
        else (array2Obj[num]) = 1;
    })

    for (num in array1Obj) {
        if (array1Obj[num] !== array2Obj[num]) return false
    }
    return true;
}
