// Simulate the growth of hedges over a number of years
// Empty square next to a hedge gets filled in the adjacent year
// Hedge that is surrounded by hedges will die in the next year
// Function should retun the number of pairs of adjacent hedges after the simulation is finished


function growingHedges(garden, years) {
    // First simulate growth for each year
    // then count number of pairs at the end, and return result

    function countNeighbors(garden, x, y) {
        let count = 0;
        for (let i = x-1; i<=x+1; i++) {
            for (let j = y-1; j<= y+1; j++) {
                if (i === x && j === y) continue;
                if (i < garden.length && i >= 0 && j < garden[0].length && j >= 0) {
                    if (garden[i][j] === 1) count++;
                }
            }
        }
        return count;
    }

    function simulateGrowth(garden) {
        let height = garden.length;
        let width = garden[0].length;
        let newGarden = garden;
        let neighbors;
        for (let i = 0; i< height; i++) {
            for (let j = 0; j<width; j++) {
                neighbors = countNeighbors(garden, i, j);
                if (garden[i][j] === 1 && neighbors === 8) {
                    newGarden[i][j] = 0;
                } else if (garden[i][j] === 0 && neighbors > 0) {
                    newGarden[i][j] = 1;
                } else {
                    newGarden[i][j] = garden[i][j];
                }
            }
        }
        return newGarden;
    }

    function findAdjacentPairs(garden) {
        let pairs = 0;
        for (let i = 0; i<garden.length; i++) {
            for (let j = 0; j<garden[0].length; j++) {
                if (garden[i][j] === 1) {
                    pairs += countNeighbors(garden, i, j)
                }
            }
        }
        return pairs;
    }

    while (years > 0) {
        garden = simulateGrowth(garden);
        years--;
    }
    console.log(garden)
    return findAdjacentPairs(garden) / 2;
}

console.log(growingHedges([[0, 0, 1], [0, 0, 0]], 1))
console.log(growingHedges([[1, 0, 0, 0], [1, 1, 0, 0], [1, 0, 0, 1]], 2))
