// let purchaseAmount = parseFloat(prompt("Введите стоимость покупки (руб):"));

// if (isNaN(purchaseAmount)) {
//     alert("Пожалуйста, введите числовое значение!");
// } else {
//     let discount = 0;
//     if (purchaseAmount > 1000) {
//         discount = 5;
//     } else if (purchaseAmount > 500) {
//         discount = 3;
//     }

//     let discountAmount = (purchaseAmount * discount) / 100;
//     let finalAmount = purchaseAmount - discountAmount;
//     let resultMessage = `Стоимость покупки без скидки: ${purchaseAmount}руб\n`;
//     resultMessage += `Скидка: ${discount}%\n`;
//     resultMessage += `Итоговая стоимость: ${finalAmount}руб`;

//     alert(resultMessage);
// }


document.writeln("<table border='1' width='260'>");
for(let i = 1; i < 11; i++) {
    document.writeln("<tr align='center'>");
    for(let j = 1; j < 11; j++) {
        if((i + j) % 2 == 0) {
            document.writeln("<td bgcolor='red'>" + (i * j) + "</td>");
        } else {
            document.writeln("<td bgcolor='yellow'>" + (i * j) + "</td>");
        }
    }
    document.writeln("</tr>");
}
document.writeln("</table>");