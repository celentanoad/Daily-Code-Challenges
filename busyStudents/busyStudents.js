// Given two integer arrays startTime and endTime and given an integer queryTime
// Return number of students doing their homework at time queryTime

function busyStudents(startTime, endTime, queryTime) {
    let result = 0;
    for (let i = 0; i < startTime.length; i++) {
        if (startTime[i] > queryTime) continue;
        if (endTime[i] < queryTime) continue;
        result++;
    }
    return result;
}

console.log(busyStudents([4],[4], 4))
console.log(busyStudents([4],[4], 5))
console.log(busyStudents([1, 2, 3],[3, 2, 7],4))
console.log(busyStudents([1, 1, 1, 1],[1, 3, 2, 4], 7))
console.log(busyStudents([9, 8, 7, 6, 5, 4, 3, 2, 1],[10, 10, 10, 10, 10, 10, 10, 10, 10], 5))
