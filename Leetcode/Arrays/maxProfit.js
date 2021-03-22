//Iniitial Solution:

// function maxProfit(prices) {
//     let purchasedPrice = -1
//     let profit = 0;
//     for (let i = 0; i<prices.length-1; i++) {
//         if (prices[i+1] > prices[i]) {
//             if (purchasedPrice === -1) {
//                 purchasedPrice = prices[i];
//             }
//         }
//         if (prices[i+1] < prices[i]) {
//             if (purchasedPrice !== -1) {
//                 profit += prices[i] - purchasedPrice;
//                 purchasedPrice = -1;
//             }
//         }
//     }
//     if (purchasedPrice !== -1) profit += prices[prices.length-1] - purchasedPrice;
//     return profit;
// }


// Better solution: 
function maxProfit(prices) {
    let maxProfit = 0;
    for (let i = 0; i<prices.length; i++) {
        if (prices[i] > prices[i-1]) {
            maxProfit += prices[i] - prices[i-1]
        }
    }
    return maxProfit;
}