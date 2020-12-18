function shapeArea(n) {
    if (n === 1) return 1;
    let area = 0;
    // shape is a diamond and diagonal sides are the length of n
    //so write a forumla that calculates  the area of that shape in a grid
    // if n === 4
        // (4 + 3*2 + 2) + (3 + 2*2 + 1) + (2+ 1*3) + (1)
        // n + (n-1 * n-1)
    function getArea(num) {
        if (num <= n - 1) {
            return area;
        };
        area += (num*num) + ((num-1)*(num-1))
        num--;
        return getArea(num, area);
    }
    return getArea(n);
}

module.exports = shapeArea;