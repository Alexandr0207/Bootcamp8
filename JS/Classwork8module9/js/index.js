'use strict';

//click

// keydown - реагує коли ти нажав на кнопку на клавіатурі, поки тримаєш
// keyup 
// keypress - коли нажали і відпустили
// input - 
// реагує форма на ті інпути які в неї знаходяться
// onChange - реагує на зміни інпутів, Реагуй коли в тебе буде щось мінятися
// scroll
// DOMContentLoaded - Зроби мені якусь функцію, коли браузер скаже всьо Джава
// скріпт, в мене загрузилось всьо дом дерево

// element.addEventListener('event',function);
// element- який має слідкувати за подією
// addEventListener - Додаємо слухача події
// event - Назва події
// function - назва функції яка має виконатись

// let btn = document.querySelector('#btn');
// function Hello (){
//   alert('Hello user!');
// }

// btn.addEventListener('click', Hello);  // Коли хочемо щоб коли нажмеш на поле інпуту
// // щоб вибило Алерт 

///////////////////////////////////Щоб робило тільки один раз


// function Hello (){
//   alert('Hello user!');
//   btn.removeEventListener('click',Hello);
// }

// btn.addEventListener('click', Hello);  // Коли хочемо щоб коли нажмеш на поле інпуту
// щоб вибило Алерт 

/////////////////////////////////////////////////////////////////////////////////

// let btn = document.querySelector('#btn');
// function eventInfo(){
//   console.log(event);
// }
// btn.addEventListener('click', eventInfo);  // коли хочемо взнати інформацію про кнопку

///////////////////////////////////////////////////////////////////////////////////


// let btn = document.querySelector('#btn');
// function eventInfo(){
//   console.log(event.target); // Це ключ обьекта івент, в якому зберігається інформація про html елемент, на якому відбулася подія
// } // event.target показує крайнього, хто запустив, event.type, показує скільки раз клацнули
// btn.addEventListener('click', eventInfo);  // коли хочемо взнати інформацію про кнопку

//////////////////////////////////////////////////////////////////////////////////////

// let sendDataBtn = document.querySelector('[type="submit"]');  // Можна ще так достукатися
// let name = document.querySelector('#name');
// let lastName = document.querySelector('#lastName');
// function readValue(){
//   console.log(name.value);
//   console.log(lastName.value);
// }
// sendDataBtn.addEventListener('click', readValue);

/////////////////////////////////////////////

// let sendDataBtn = document.querySelector('[type="submit"]');  // Можна ще так достукатися
// let name = document.querySelector('#name');
// let lastName = document.querySelector('#lastName');
// function readValue(){
//   event.preventDefault() // Це команда яка відміняє стандартну поведінку елементів браузера;
//   console.log(name.value);
//   console.log(lastName.value);
//   name.value = ''; // Зачистити поля після вводу
//   lastName.value = ''; // Зачистити поля після вводу
// }
// sendDataBtn.addEventListener('click', readValue);

 ///////////////////////////////////////////// Навішувати подію не click, а submit

// let form = document.querySelector('#form');  // Можна ще так достукатися
// let name = document.querySelector('#name');
// let lastName = document.querySelector('#lastName');
// function readValue(){
//   event.preventDefault() // Це команда яка відміняє стандартну поведінку елементів браузера;
//   console.log(name.value);
//   console.log(lastName.value);
//   // name.value = ''; // Зачистити поля після вводу
//   // lastName.value = ''; // Зачистити поля після вводу
//   form.reset(); // Зачищає всі інпути які є в формі ,  неважливо скільки їх буде, 1, 2 , 5 , 10 :)
// }
// form.addEventListener('submit', readValue); // Для того, щоб можна було вводити без кнопки, а ентером

//////////////////////////////////////////////////////////////////////////////////

// event.stopPropagation(); //  Зупиняє 
// // Якщо багато обработчиків, сайт може тормозити

// event.target //  
// event.currentTarget // показівает текущий елемент до которого дошло всплітие
// 

//// Задача, создати в html ul>li*5 і потім зробити так, щоб при кліку на лішку, в консоль логові писало число порядкового номеру
// let list = document.querySelector('#list');
// let listItems = Array.from(list.children); // создаєм масів з li
// console.log(listItems);
// function FindIndex(){
//   let index = event.target;
//   let indexOf = listItems.indexOf(index);
//   console.log(indexOf + 1);
// };
// list.addEventListener('click', FindIndex);
////
