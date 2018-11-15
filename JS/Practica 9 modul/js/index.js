'use strict';

/* 
  Напишите скрипт, реализующий базовый функционал
  таймера, запуск отсчета времени и сброс счетчика
  в исходное состояние.
  
  Создайте функцию startTimer, которая будет запускать
  отсчет времени с момента ее нажатия, она вызывается 
  при клике на кнопку с классом js-timer-start.
  
  Создайте функцию stopTimer, которая будет останавливать
  счетчик, она вызывается при клике на кнопку с классом js-timer-stop.
  
  Используйте вспомогательную функцию updateClockface 
  которая обновляет значение счетчика в интерфейсе. 
  Для составления строки времени в формате xx:xx.x, 
  исользуйте функцию getFormattedTime из задания номер 1.
  
  Подсказка: так как нам интересны исключительно сотни миллисекунд,
      нет смысла выполнять пересчет времени чаще чем каждые 100мс.
*/

const clockface = document.querySelector(".js-clockface");
const startBtn = document.querySelector(".js-timer-start");
const stopBtn = document.querySelector(".js-timer-stop");

const timer = {
  startTime: null,
  deltaTime: null,
  id: null
};


function sum(){
  timer.deltaTime = Date.now() - timer.startTime;
  updateClockface(clockface,timer.deltaTime);
}
/*
* Вспомогательные функции
*/
function startTimer(){
  timer.startTime = Date.now();
  timer.id = setInterval(sum, 100);
}
startBtn.addEventListener('click', startTimer);
function stopTimer(){
  clearInterval(timer.id);
}
stopBtn.addEventListener('click', stopTimer);


function getFormattedTime(time) {
  let ms = Math.floor(time / 100%10);
  let s = Math.floor(time / 1000%60);
  let m = Math.floor(time/1000/60%60);
  m = m < 10 ? `0${m}` : m;
  s = s < 10 ? `0${s}` : s;
   return `${m}:${s}.${ms}`;
 }
/*
* Обновляет поле счетчика новым значением при вызове
* аргумент time это кол-во миллисекунд
*/
function updateClockface(elem, time) {
  
  // Используйте функцию getFormattedTime из задания #1
  elem.textContent = getFormattedTime(time);
}

/*
* Подсветка активной кнопки
*/
function setActiveBtn(target) {
  if(target.classList.contains('active')) {
    return;
  }
  
  startBtn.classList.remove('active');
  stopBtn.classList.remove('active');
  
  target.classList.add('active');
}
