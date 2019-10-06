console.log('worker')

// Обычные покупки 1 - 1_000 : 1%
// Повышенная категория покупок 1_001 - 5_000  : 5%
// Спец покупки 5_001-10_000  : 30%

const purchaseAmount = 1000000;
const ratioRegularPurchaseOdds = 0.01;
const ratioIncreasedShoppingCategory = 0.05;
const specialPurchaseRate = 0.3;
const regularPurchases = 1000;
const increasedShoppingCategory = 5000;
const specialPurchases = 10000;
const maxСashback = 3000;

let cashback; 
if (purchaseAmount <= regularPurchases) {
    cashback = purchaseAmount * ratioRegularPurchaseOdds; 
} else if (purchaseAmount <= increasedShoppingCategory) {
    cashback = purchaseAmount * ratioIncreasedShoppingCategory; 
} else  { 
    cashback = purchaseAmount * specialPurchaseRate; 
} 
if (cashback >= 3000) {
    cashback = maxСashback; 
}
    
console.log(Math.floor(cashback));