function reverse(num) {
    let result = [];
    let arr = num.toString().split('');
    if (arr[0] === '-') result.push(arr[0]);
    if (arr.length === 1) return num;
    if (arr[arr.length-1] === '0') arr.splice(arr.length-1, 1);
    for (let i = arr.length-1; i>=0; i--) {
        result.push(arr[i])
    }
    result = parseInt(result.join(''));
    if (Math.abs(result) > 2147483648) return 0;
    else return result;
}