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

module.exports = busyStudents;