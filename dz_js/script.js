let purchaseAmount = parseFloat(prompt("Введите стоимость покупки (руб):"));

if (isNaN(purchaseAmount)) {
    alert("Пожалуйста, введите числовое значение!");
} else {
    let discount = 0;
    if (purchaseAmount > 1000) {
        discount = 5;
    } else if (purchaseAmount > 500) {
        discount = 3;
    }

    let discountAmount = (purchaseAmount * discount) / 100;
    let finalAmount = purchaseAmount - discountAmount;
    let resultMessage = `Стоимость покупки без скидки: ${purchaseAmount}руб\n`;
    resultMessage += `Скидка: ${discount}%\n`;
    resultMessage += `Итоговая стоимость: ${finalAmount}руб`;

    alert(resultMessage);
}