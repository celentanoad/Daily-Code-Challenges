function adjacentElementsProduct(inputArray) {
    let result;
    let temp;
    for (let i = 0; i<inputArray.length; i++) {
        if (i === 0) {
            temp = inputArray[i] * inputArray[i + 1];
            result = temp
        } 
        else if (i === inputArray.length-1) temp = inputArray[i] * inputArray[i - 1];
        else {
            temp = inputArray[i] * inputArray[i-1];
            if (temp > result) result = temp;
            temp = inputArray[i] * inputArray[i+1];
        }
        if (temp > result) result = temp;
        temp = 0;
    }
    return result;
}
