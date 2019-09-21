console.log('worker')

// Обычные покупки 1 - 1000 руб, кэшбэк 1%
// Повышенная категория покупок 1001 - 5000 руб, кэшбэк 5%
// Спец покупки 5001-10000 руб, кэшбек 30%
// Сумма кэшбэка не больше 3000 руб
// Кэшбэк округляют до целого числа в меньшую сторону


const purchaseAmount = 4535;

let cashback; 
if (purchaseAmount <= 1000) {
    cashback = purchaseAmount * 0.01; 
} else if (purchaseAmount <= 5000) {
    cashback = purchaseAmount * 0.05; 
} else { (purchaseAmount <= 10000) 
    cashback = purchaseAmount * 0.3; 
} if    (purchaseAmount > 10000)
    cashback = 3000; 

console.log(Math.floor(cashback));