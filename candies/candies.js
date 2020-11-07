function kidsWithCandies(candies, extraCandies) {
    let result = [];
    let maxCandies = [...candies].sort((a, b) => b - a)[0];
    for (let kid of candies) {
        if (kid + extraCandies >= maxCandies) result.push(true);
        else result.push(false);
    }
    return result;
}

module.exports = kidsWithCandies;