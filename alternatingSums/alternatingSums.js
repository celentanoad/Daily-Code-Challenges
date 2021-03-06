function alternatingSums(a) {
    let groupA = [];
    let groupB = [];
    let switcher = 1;
    let result = [];
    let total = 0;
    for (let i = 0; i<a.length; i++) {
        if (switcher === 1) groupA.push(a[i]);
        if (switcher === -1) groupB.push(a[i]);
        switcher *= -1;
    }
    for (let i = 0; i<groupA.length; i++) {
        total += groupA[i];
    } 
    result.push(total);
    total = 0;
    for (let i = 0; i<groupB.length; i++) {
        total += groupB[i]
    }

    result.push(total)
    return result;
}

module.exports = alternatingSums;