console.log('worker')

// Обычные покупки 1 - 1_000 : 1%
// Повышенная категория покупок 1_001 - 5_000  : 5%
// Спец покупки 5_001-10_000  : 30%
// Сумма кэшбэка не больше 3_000

const purchaseAmount = 4550;
const regularPurchaseOdds = 0.01;
const increasedShoppingCategory = 0.05;
const specialPurchases = 0.3;

let cashback; 
if (purchaseAmount <= 1000) {
    cashback = purchaseAmount * regularPurchaseOdds; 
} else if (purchaseAmount <= 5000) {
    cashback = purchaseAmount * increasedShoppingCategory; 
} else { (purchaseAmount <= 10000) 
    cashback = purchaseAmount * specialPurchases; 
} 
if (purchaseAmount > 10000) {
    cashback = 3000; 
}
    
console.log(Math.floor(cashback));