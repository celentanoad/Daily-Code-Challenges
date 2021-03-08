// Two arrays are called similar if one can be obtained from another by swapping at most one pair of elements in one of the arrays.

function areSimilar(a, b) {
    let different = [];

    for (let i = 0; i< a.length; i++) {
        if (a[i] !== b[i]){
            different.push(i);
        }
    }
    if (different.length === 0) return true;
    if (different.length === 2) {
        if (b[different[0]] === a[different[1]] && a[different[0]] === b[different[1]]) return true
    }
    return false;
}

module.exports = areSimilar;