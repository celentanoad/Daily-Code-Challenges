function makeArrayConsecutive(statues) {
    if (statues.length < 2) return 0;
    let result = 0;
    let sortedStatues = statues.sort((a, b) => a - b);
    for (let i = 0; i< sortedStatues.length-1; i++) {
        console.log(sortedStatues[i])
        console.log(sortedStatues[i+1])
        if (sortedStatues[i+1]> sortedStatues[i]+1) {
            result += (sortedStatues[i+1] - sortedStatues[i]) - 1;
        }
        console.log(result);
    }
    return result;
}

module.exports = makeArrayConsecutive;