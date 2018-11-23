'use strict';

       /// Клики

// Простые:

// mousedown - кнопка мыши нажата над элементом.
// mouseup - кнопка мыши отпущена над элементом.
// mouseover - курсор мыши появился над элементом.
// mouseout - курсор мыши ушел с элемента.
// mousemove - каждое движение мыши над элементом генерирует это событие.
// Комплексные:

// click - Вызывается при клике мышью, то есть при mousedown, а затем mouseup на одном элементе
// contextmenu - Вызывается при клике правой кнопкой мыши на элементе.
// dblclick - Вызывается при двойном клике по элементу.


let inputprice = document.querySelector('#price');
console.log(inputprice);
let span = document.querySelector('.amount');
console.log(span);
let range = document.querySelector('#quantity');
console.log(range);
let p = document.querySelector('.total');
let form = document.querySelector('.form');


function move (){
  console.log(inputprice.value); // Витягуємо значення з інпуів
  console.log(range.value);
  // p.textContent = (inputprice.value * range.value).toFixed(2) + 'грн'; // пишемо в текст контент рішення то що хочемо зробити
                      //
  p.textContent = `${(inputprice.value * range.value).toFixed(2)} грн` // пишемо в текст контент рішення то що хочемо зробити
  span.textContent = range.value; // 

}
form.addEventListener('input', move);
window.addEventListener('DOMContentLoaded', move);
