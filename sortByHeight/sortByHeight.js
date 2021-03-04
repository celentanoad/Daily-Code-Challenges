function sortByHeight(a) {
    let aCopy = a;
    let result = aCopy;
    let heights = [];
    for (let i = 0; i<a.length; i++) {
        if (a[i] !== -1) {
            heights.push(a[i]);
            aCopy[i] = 0;
        }
    }
    heights = heights.sort((a, b) => a- b);
    let count = 0;
    for (let i=0; i<a.length; i++) {
        if (aCopy[i] === 0) {
            result[i] = heights[count];
            count++;
        }
    }
    return result;
}

module.exports = sortByHeight;