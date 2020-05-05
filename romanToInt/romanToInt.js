romanObj = { 
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    G: 5000,
    H: 10000
}

function romanToInt(str) {
    let num = 0;
    for (i=0; i<str.length; i++) {
        currentValue = romanObj[str[i]]
        nextValue = romanObj[str[i+1]]
        if (currentValue < nextValue) {
            num+= nextValue - currentValue;
            i++;
        } else {
            num += currentValue;
        }
    }
    return num;
}
