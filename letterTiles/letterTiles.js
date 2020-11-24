//You have n  tiles, where each tile has one letter tiles[i] printed on it.

const { handlePotentialSyntaxError } = require("@jest/transform");

//Return the number of possible non-empty sequences of letters you can make using the letters printed on those tiles.


function numTilePossibilities(tiles) {
    if (tiles.length === 1) return 1;
    let map = new Map();
    // the Map will store the amounts of each letter
    for (let i = 0; i<tiles.length; i++) {
        map.set(tiles[i], (map.get(tiles[i]) || 0) + 1);
    };
    return findSum(map)
    function findSum(map) {
        let sum = 0;
        console.log(`MAP at start of findSum:`)
        console.log(map)
        for (let [key, value] of map.entries()) {
            if (value === 0) continue;
            sum++;
            map.set(key, map.get(key) - 1);
            sum += findSum(map, sum);
            map.set(key, map.get(key) + 1);
            console.log(`SUM = ${sum} and MAP at end of iteration is:`)
            console.log(map)
        }
        return sum;
    }

    // function findPermutations(string) {
    //     let permutationsArray = [] 
    //     for (let i = 0; i < string.length; i++){
    //       let char = string[i]

    //       if (string.indexOf(char) != i)
    //       continue
      
    //       let remainingChars = string.slice(0, i) + string.slice(i + 1, string.length)
      
    //       for (let permutation of findPermutations(remainingChars)){
    //         permutationsArray.push(char + permutation) }
    //     }
    //     return permutationsArray
    // }
    // let result = []
    // for (let tile of tiles) {

    //     result.push(findPermutations(tile))
    // }
    // console.log(result)
    // console.log(findPermutations(tiles).length)
    // function findPossibilities(tiles) {
    //     let permutations = [];
    //     for (let i = 0; i< tiles.length; i++) {
    //         let char = tiles[i];
    //         let remainingChars = tiles.slice(0, i) + tiles.slice(i + 1, tiles.length)
    //         console.log(findPossibilities(remainingChars))
    //         // for (let letter of remainingResults) {
    //         //     console.log(letter)
    //         //     results.push(char + letter)
    //         // }
    //     }
    //     // console.log(results)
    //     return permutations;
    // }
    // const results = findPossibilities(tiles)
    // console.log(results)
    
    // return results.length;
}

// let findPermutations = (string) => {
//     if (!string || typeof string !== "string"){
//       return "Please enter a string"
//     } else if (string.length < 2 ){
//       return string
//     }
  
//     let permutationsArray = [] 
     
//     for (let i = 0; i < string.length; i++){
//       let char = string[i]
  
//       if (string.indexOf(char) != i)
//       continue
  
//       let remainingChars = string.slice(0, i) + string.slice(i + 1, string.length)
  
//       for (let permutation of findPermutations(remainingChars)){
//         permutationsArray.push(char + permutation) }
//     }
//     return permutationsArray
//   }

//  console.log(findPermutations("AAB"))


numTilePossibilities("AAB")

module.exports = numTilePossibilities;