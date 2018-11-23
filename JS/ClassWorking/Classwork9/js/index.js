'use strict';

// setTimeout(callback, delay);

// setInterval(callback, delay);

// function sayHello(){
  // console.log("Hello!");
// }

// let timeOutId = setTimeout(sayHello, 2000); 

// let intervalid = setInterval(sayHello, 1000); // як секундомер, повторяє багато раз як таймер

// console.log('timeout' ,timeOutId); // timeoit 1 
// console.log('timeout', intervalid); // timeoit 2 


// Як зупинити таймаут чи інтервал??? 

// clearInterval (intervalid); // Інтервал навішують саме більше на кнопки, тіпа STOP!, Зупиняється тільки руками!
// clearTimeout(timeOutId);  // Таймаут призупинюють рідко

// DATE 

// let date = new Date();
// console.log(date);
// console.log(date.getDate());// Цей метод дає визначити поточне число в місяці // 12 - число
// console.log(date.getMonth());// Цей метод дає визначити поточний місяць // 10 - число 10 бо місяці начинаються з 0, хотя зараз 11 місяць!
// console.log(date.getDay());// Воскресенье 1 день недели, сьогодні понеділок - покаже 1 , це означає що сьогодні понеділок
// console.log(date.getFullYear());// ПОказує рік, // 2018
// console.log(date.getHours());// Показує яка зараз година // 11:48 показує // 11 
// console.log(date.getMinutes());// Показує яка зараз хвилина // 11:49 показує // 49
// console.log(date.getSeconds());// Показує секунду // 40;
// console.log(date.getMilliseconds());// Показує мілісекунду // 959;
// console.log(date.getTime());// Формат часу мілісеккунд від Unix time від 1970 року 1 січня;;
// console.log(Date.now());// 

////////////////////////////////////////////////////////////////////////////////

let date = new Date ("4, 2017, April"); // Создаєм обьєкт не поточної дати, а обьєкт дати, яка відповідає за цей день
console.log(date);







