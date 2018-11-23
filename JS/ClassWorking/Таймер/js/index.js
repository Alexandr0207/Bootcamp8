'use strict';

let deadline = new Date(2018, 11, 31, 0, 0);

// 0 , 0 - 0 годин 0 хвилин;

// console.log(delta);
// console.log(Math.floor(delta / 1000 % 60)); // Округлюємо секунди
// console.log(Math.floor(delta / 1000 / 60 % 60)); // Округлюємо хвилини
// console.log(Math.floor(delta / 1000 / 60 / 60 % 60)); // Округлюємо години
// console.log(Math.floor(delta / 1000 / 60 / 60 / 24)); // Округлюємо години
let daysContainer = document.querySelector('.days');
let hoursContainer = document.querySelector('.hours');
let minutesContainer = document.querySelector('.minutes');
let secondsContainer = document.querySelector('.seconds');

function timer() {
  let today = Date.now();
  let delta = deadline - today;
  let seconds = (Math.floor(delta / 1000 % 60)); // Округлюємо секунди
  let minutes = (Math.floor(delta / 1000 / 60 % 60)); // Округлюємо хвилини
  let hours = (Math.floor(delta / 1000 / 60 / 60 % 60)); // Округлюємо години
  let days = (Math.floor(delta / 1000 / 60 / 60 / 24)); // Округлюємо Дні
  // console.log(`${days} дней ${hours} часов ${minutes} минут ${seconds}`);
  daysContainer.textContent = days < 10 ? `0${days}` : days;
  hoursContainer.textContent = days < 10 ? `0${hours}` : hours;
  minutesContainer.textContent = days < 10 ? `0${minutes}` : minutes;
  secondsContainer.textContent = days < 10 ? `0${seconds}` : seconds;
  let button = document.querySelector('.btn');

}


timer();
let interval = setInterval(timer, 1000) // Щоб запускало ту саму функцію каждий раз через секунду
// button.onclick = function stop() {
//   if (timer) {
//     clearInterval(timer);
//     timer = null;
//   }
// };
// let timeOutId = setTimeout(timer, 0);
// let clear = clearInterval (timer, stop ); // Інтервал навішують саме більше на кнопки, тіпа STOP!, Зупиняється тільки руками!

