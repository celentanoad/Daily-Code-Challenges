//Using Memoization:

function memoize(fn) {
    const cache = {}
    return function(...args) {
        if (cache[args]) return cache[args]
        const result = fn.apply(this, args);
        cache[args] = result;
        return result;
    }

}

//recursive solution:
//O(2^n) complexity (Exponential)
function slowFib(n) {
    if (n < 2) return n;
    return fib(n-1) + fib(n-2)
}

const fib = memoize(slowFib)