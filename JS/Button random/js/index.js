'use strict';

// 1) Створити в HTML 5 кнопок
// 2) Написати скрипт який при ховері буде міняти позицію кнопок на екрані, щоб не можна було по них клікнути
// 3) Нова позиція кнопок має бути випадковою
// 4) Кнопки не повинні виїжати за межі екрану
// 5) Позиція кнопок має вираховуватися відносно висоти і ширини вікна браузера
// 6) Переміщення кнопок зробити плавним за допомогою transition
// 7) Визначати кнопку на якій відбулася подія можна двома способами:
// 7.1) event
// 7.2) this
// 8) Корисні команди:
// window.innerWidth
// window.innerHeight
// clientHeight
// clientWidth
// mouseenter


let container = document.querySelector('.container')
let BTN = document.querySelector('.btn');


function ChangeButtonActive(){
  event.target.style.left = `${Math.random() * (window.innerWidth - BTN.clientWidth)}px`;
  event.target.style.top = `${Math.random() * (window.innerHeight - BTN.clientHeight)}px`;
}

container.addEventListener('mouseover', ChangeButtonActive);