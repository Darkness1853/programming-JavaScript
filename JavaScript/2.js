const username = "my name";
let bonusBalance = 1000;
let startBalance = bonusBalance;
const pointsPerPurchase = 50;
const dailyDecay = 3;
const daysToCalculate = 7;

for (let day = 1; day <= daysToCalculate; day++) {
    bonusBalance -= dailyDecay;

    if (day % 2 === 1) {
        bonusBalance += pointsPerPurchase;
    }
}

console.log(`Пользователь ${username}`);
console.log(`Начальный баланс: ${startBalance}`)
console.log(`Баланс через 7 дней: ${bonusBalance}`);
