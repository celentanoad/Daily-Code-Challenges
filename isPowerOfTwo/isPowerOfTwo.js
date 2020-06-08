// Given an integer, write a function to determine if it is a power of two.

function isPowerOfTwo(n) {
    function divideByTwo(n) {
        console.log(n)
        if (n === 1) return true;
        if (n < 1) return false;
        if (n % 2 !== 0) return false;
        return divideByTwo(n / 2);
    }
    return divideByTwo(n);
}