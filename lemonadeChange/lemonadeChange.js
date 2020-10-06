// At a lemonade stand, each lemonade costs $5
// Customers are standing in a queue, and order one at a time
// Each customer will only buy one lemonade and pay with either $5, $10, $20 bills
// You must provide correct change to each customer
// Return true if you can provide every customer with exact change

function lemonadeChange(bills) {
    let fives = 0;
    let tens = 0;
    for (let bill of bills) {
        if (bill === 5) fives++;
        else {
            if (bill === 10) {
                tens++;
                if (fives) fives--
                else return false;
            }
            if (bill === 20) {
                if (tens && fives) {
                    fives--;
                    tens--;
                } else if (fives >-3 ) {
                    fives -= 3
                } else {
                    return false
                }
            }
           
        }
    }
    return true;
}

console.log(lemonadeChange([5, 5, 5, 10, 20])) // returns true
console.log(lemonadeChange([10, 10])) // returns false
console.log(lemonadeChange([5, 5, 10])) // returns true
console.log(lemonadeChange([5, 5, 10, 10, 20])) // returns false