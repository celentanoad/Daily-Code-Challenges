function coinChange(coins, amount) {
    coins.sort((a,b) => a-b)

    console.log(coins)
    let result = 0;
    for (let i = coins.length-1; i >= 0; i--) {
        while (coins[i] <= amount) {
            amount -= coins[i];
            result += 1;
            console.log(`amount: ${amount}`)
        }
    }
    if (amount !== 0) {
        return -1;
    } else {
        return result;
    }
}


console.log(coinChange([186, 419, 83, 408], 6249))