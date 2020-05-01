function findMedian(arrA, arrB) {
    let arrC = [];
    while (arrA.length || arrB.length) {
        if (arrA[0] > arrB[0]) {
            arrC.push(arrB.shift())
        } else {
            arrC.push(arrA.shift())
        }
    }
    if (arrC.length % 2) {
        return arrC[Math.floor(arrC.length / 2)]
    } else {
        return (arrC[arrC.length / 2 + arrC[arrC.length / 2 -1]/2])
    }
}

console.log(findMedian([2, 3, 4, 50],[1, 2]));