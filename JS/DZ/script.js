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


// document.writeln("<table border='1' width='260'>");
// for(let i = 1; i < 11; i++) {
//     document.writeln("<tr align='center'>");
//     for(let j = 1; j < 11; j++) {
//         if((i + j) % 2 == 0) {
//             document.writeln("<td bgcolor='red'>" + (i * j) + "</td>");
//         } else {
//             document.writeln("<td bgcolor='yellow'>" + (i * j) + "</td>");
//         }
//     }
//     document.writeln("</tr>");
// }
// document.writeln("</table>");


// document.writeln("<div id='demonstration'></div>");
// let div = document.querySelector("#demonstration");
// div.innerHTML = `Термоста́т — прибор для поддержания постоянной температуры. Поддержание температуры
// обеспечивается либо за счёт использования терморегуляторов, либо осуществлением фазового
// перехода (например, таяние льда). Для уменьшения потерь тепла или холода термостаты, как
// правило, теплоизолируют. Но не всегда. Широко известны автомобильные моторы, где летом нет
// никакой теплоизоляции и за счёт действия восковых термостатов поддерживается постоянная
// температура. Другим примером термостата, широко используемого в быту, является холодильник`;

// div.style.background="yellow";
// div.style.color="black";
// div.style.width="256px";
// div.style.height="256px";
// div.style.overflow="scroll"
// div.style.outline="1px dashed red";

// div.className = "resetFont";

// let res = document.querySelector(".resetFont");
// res.style.fontSize="20pt";
// res.style.fontWeight="400";
// res.style.textDecoration="underline"

// const ul = document.createElement('ul');
//         ul.innerHTML = `
//             <li>Пункт 1</li>
//             <li>Пункт 2</li>
//             <li>Пункт 3</li>`;
//         ul.style.listStyleType = 'square'; 
//         ul.style.width = '50%';            
        
//         document.body.appendChild(ul);   




const months = [
  "Январь", "Февраль", "Март", 
  "Апрель", "Май", "Июнь", 
  "Июль", "Август", "Сентябрь", 
  "Октябрь", "Ноябрь", "Декабрь"
];

function getRandomColor() {
  const r = Math.floor(Math.random() * 256); 
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

for (let i = 0; i < months.length; i++) {
  const color = getRandomColor();
  document.writeln(`
    <div style="
      background-color: ${color};
      padding: 5px;
      margin: 5px 0;
      color: white;
      font-weight: bold;
      width: 600px;
      text-align: center;
    ">
      ${months[i]}
    </div>
  `);
}