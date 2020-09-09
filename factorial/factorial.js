//In mathematics, the factorial of integer 'n' is written as 'n!'. It is equal to the product of n and every integer preceding it. For example: 5! = 1 x 2 x 3 x 4 x 5 = 120

//Write a function that takes an integer 'n' and returns 'n!'.

//F or any values outside the positive range, return null, nil or None .

// 0! is always equal to 1. Negative values should return null;

//This function should return n!
function factorial (n) {
    if (n === 0) return 1;
    if (n < 0) return null;
    return factorial(n - 1) * n;
}

console.log(factorial(5));
