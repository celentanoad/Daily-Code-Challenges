function coinChange(coins, amount) {
    if (amount === 0) {
        return 0;
    }
     
    let memo = Array(amount+1).fill(-1);
   coins.forEach(coin => {
       memo.splice(coin, 1, coin);
   });

   function helper(coins, amount, memo) {
        if (amount < 0) return -1;
        if (amount > 0) {
           if(memo[amount]!= -1) return memo[amount];
           let result = Infinity;
           coins.forEach(coin => {
               let temp = helper(coins, amount - coin, memo);
               console.log(temp);
               if (temp>0 && temp < result) {
                   result = 1 + temp;
               }
           });
           if (result !== Infinity) {
               memo[amount]=result;
           } 
           console.log(memo[amount]);
       }
       return memo[amount];
   }
   return helper(coins, amount, memo);
}


console.log(coinChange([2], 4))