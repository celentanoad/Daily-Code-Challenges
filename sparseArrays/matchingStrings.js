
//alternate solution:
// function matchingStrings(strings, queries) {
//     let matching =[];
//     let val;

//     let countString = strings.reduce(function(acc, str) {
//         acc[str] = acc[str] ? acc[str]+1 : 1
//         return acc
//     }, {})

//     for (let i = 0; i<queries.length; i++) {
//         if(countString[queries[i]]) {
//             val = countString[queries[i]]
//             matching.push(val)
//         } else {
//             matching.push(0)
//         }
//     }
//     return matching;
// }

//Better solution:
function matchingStrings(strings, queries) {
    return queries.map((query) => 
    strings.filter(s => s === query).length);
}

matchingStrings(["aba", "baba", "abc"], ["ab", "abc", "aac"])