function groupingOptions(people, groups) {
    let result = []
    let cache = Array(groups).fill(1)
    let highestNum = people - (groups - 1);
    let nextHighest;
    let counter = people;
    let group = [];

    function createGroup(num) {
        if (group.length === groups) {
            result.push(group);
            group = [];
            return;
        }
        group.push(num)
        counter = counter-num;
        nextHighest = (counter-num);
        createGroup(nextHighest)
    }

    while (result.length < groups) {
        createGroup(highestNum);
    }
    return result;

    
    for (let i = groups -1; i>= 0; i--) {
        group.push(highestNum)
        highestNum = (people-highestNum);
    }

    return cache
}

console.log(groupingOptions(8, 4))