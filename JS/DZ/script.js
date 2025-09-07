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




// const months = [
//   "Январь", "Февраль", "Март", 
//   "Апрель", "Май", "Июнь", 
//   "Июль", "Август", "Сентябрь", 
//   "Октябрь", "Ноябрь", "Декабрь"
// ];

// function getRandomColor() {
//   const r = Math.floor(Math.random() * 256); 
//   const g = Math.floor(Math.random() * 256);
//   const b = Math.floor(Math.random() * 256);
//   return `rgb(${r}, ${g}, ${b})`;
// }

// for (let i = 0; i < months.length; i++) {
//   const color = getRandomColor();
//   document.writeln(`
//     <div style="
//       background-color: ${color};
//       padding: 5px;
//       margin: 5px 0;
//       color: white;
//       font-weight: bold;
//       width: 600px;
//       text-align: center;
//     ">
//       ${months[i]}
//     </div>
//   `);
// }



// const showBtn = document.getElementById("showBtn");
// const hideBtn = document.getElementById("hideBtn");
// const myImage = document.getElementById("myImage");

// showBtn.addEventListener("click", () => {
//     myImage.style.display = "block";
// });

// hideBtn.addEventListener("click", () => {
//     myImage.style.display = "none";
// });




// const images = [
//     "images/1b.jpg",
//     "images/s-l1600.jpg", 
//     "images/screen-4.jpg"
// ];

// const firstInput = document.getElementById('firstNum');
// const secondInput = document.getElementById('secondNum');
// const errorDiv = document.getElementById('errorMessage');
// const swapBtn = document.getElementById('swapBtn');

// function updateImages() {
//     for (let i = 0; i < 3; i++) {
//         document.getElementById(`img${i+1}`).src = images[i];
//     }
// }

// function animateSwap(firstIndex, secondIndex) {
//     const img1 = document.getElementById(`img${firstIndex + 1}`);
//     const img2 = document.getElementById(`img${secondIndex + 1}`);
    
//     img1.style.transform = 'scale(1.1)';
//     img2.style.transform = 'scale(1.1)';
    
//     setTimeout(() => {
//         img1.style.transform = 'scale(1)';
//         img2.style.transform = 'scale(1)';
//     }, 500);
// }


// function swapImages() {
//     errorDiv.textContent = '';
    
//     const firstIndex = parseInt(firstInput.value) - 1;
//     const secondIndex = parseInt(secondInput.value) - 1;
    
//     if (isNaN(firstIndex) || isNaN(secondIndex)) {
//         errorDiv.textContent = 'Пожалуйста, введите числа!';
//         return;
//     }
    
//     if (firstIndex < 0 || firstIndex > 2 || secondIndex < 0 || secondIndex > 2) {
//         errorDiv.textContent = 'Номера должны быть от 1 до 3!';
//         return;
//     }
    
//     if (firstIndex === secondIndex) {
//         errorDiv.textContent = 'Выберите разные картинки для обмена!';
//         return;
//     }
    
//     const temp = images[firstIndex];
//     images[firstIndex] = images[secondIndex];
//     images[secondIndex] = temp;
    
//     updateImages();
    
    
//     animateSwap(firstIndex, secondIndex);
// }

// swapBtn.addEventListener('click', swapImages);


// window.addEventListener('DOMContentLoaded', updateImages);

// document.addEventListener('DOMContentLoaded', function() {
//     const submitBtn = document.querySelector('#submitBtn');
//     const nameInput = document.querySelector('#nameInput');
//     const messageInput = document.querySelector('#messageInput');
//     const messageContainer = document.querySelector('#messageContainer');
    
//     submitBtn.addEventListener("click", smsUser);
    
//     function smsUser(){
//         const sms = messageInput.value;
//         const name = nameInput.value;
//         const regExpMail = /([\w.]+@[\w.]+\.[a-z]{2,3})/ig;
//         const formattedSms = sms.replace(regExpMail, "<span style='color: red'>$1</span>");
        
//         const newMessage = document.createElement('div');
//         newMessage.className = 'message';
//         newMessage.innerHTML = `
//             <fieldset>
//                 <legend>${name}</legend>
//                 <div>${formattedSms}</div>
//             </fieldset>
//         `;
        
//         messageContainer.appendChild(newMessage);
        
//         nameInput.value = '';
//     }
// });

class Header{
    constructor(img, h1, h2){
        this.src = img;
        this.h1 = h1;
        this.h2 = h2;
        this.out = "";
    }
    render(id){
        this.out = `
            <img src="${this.src}" alt="${this.h1}">
            <h1>${this.h1}</h1>
            <h2>${this.h2}</h2>
        `;
        document.querySelector(`#${id}`).innerHTML = this.out;
    }
}

class HeaderExt extends Header{
    constructor(img, h1, h2, tel){
        super (img, h1, h2);
        this.tel = tel;
    }
    render(id){
        super.render(id);
        this.out += `
        <h3>${this.tel}</h3>
        `;
        document.querySelector(`#${id}`).innerHTML = this.out;
    }
}

let img1 = "https://images.icon-icons.com/3252/PNG/96/store_microsoft_regular_icon_204197.png";
let header1 = new Header(img1, "Заголовок 1", "Подзаголовок 1");
header1.render("header1");

let img2 = "https://images.icon-icons.com/3251/PNG/96/eye_show_regular_icon_203603.png";
let header2 = new Header(img2, "Заголовок 2", "Подзаголовок 2");
header2.render("header2");

let img3 = "https://images.icon-icons.com/3251/PNG/96/notepad_edit_regular_icon_203434.png";
let header3 = new HeaderExt(img3, "Заголовок 3", "Подзаголовок 3", "+7 999-999-999");
header3.render("header3");

let img4 = "https://images.icon-icons.com/3251/PNG/96/video_recording_regular_icon_202660.png";
let header4 = new Header(img4, "Заголовок 4", "Подзаголовок 4");
header4.render("header4");

let img5 = "https://images.icon-icons.com/3251/PNG/96/eye_hide_regular_icon_203604.png";
let header5 = new HeaderExt(img5, "Заголовок 5", "Подзаголовок 5", "+7 999-999-999");
header5.render("header5");

let img6 = "https://images.icon-icons.com/3251/PNG/96/brain_circuit_regular_icon_203865.png";
let header6 = new Header(img6, "Заголовок 6", "Подзаголовок 6");
header6.render("header6");

let img7 = "https://images.icon-icons.com/3251/PNG/96/handshake_regular_icon_203548.png";
let header7 = new HeaderExt(img7, "Заголовок 7", "Подзаголовок 7", "+7 999-999-999");
header7.render("header7");

let img8 = "https://images.icon-icons.com/3251/PNG/96/bot_regular_icon_203029.png";
let header8 = new Header(img8, "Заголовок 8", "Подзаголовок 8");
header8.render("header8");

let img9 = "https://images.icon-icons.com/3251/PNG/96/cursor_click_regular_icon_203700.png";
let header9 = new HeaderExt(img9, "Заголовок 9", "Подзаголовок 9", "+7 999-999-999");
header9.render("header9");