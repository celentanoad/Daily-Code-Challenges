//There are 2N people a company is planning to interview. 
//The cost of flying the i-th person to city A is costs[i][0], and the cost of flying the i-th person to city B is costs[i][1].
//Return the minimum cost to fly every person to a city such that exactly N people arrive in each city.

function twoCitySchedCost(costs) {
    let result = 0;
    let cityASpots = costs.length / 2;
    let cityBSpots = cityASpots;
    for (let set of costs.sort((a, b) => Math.abs(b[0] - b[1]) - Math.abs(a[0] - a[1]))) {
        if (cityASpots > 0 && cityBSpots > 0) {
            if (set[0] > set[1]) {
                cityBSpots--
                result += set[1];
            } else {
                cityASpots--
                result += set[0];
            }
        } else {
            if (cityASpots) {
                cityASpots--
                result += set[0];
            } else {
                cityBSpots--
                result += set[1];
            }
        }
    }
    return result;
}
