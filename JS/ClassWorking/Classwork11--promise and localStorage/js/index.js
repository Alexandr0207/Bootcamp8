'use strict';

// Local Storage

// console.log(localStorage);

// localStorage.setItem('favorite'), JSON.stringify(5); // 1 команда // Записує данні
// const result = localStorage.getItem('favorite'); // Читає данні
// let a = JSON.parse(result); // Перевести з JSON в строку
// console.log(a);
// localStorage.removeItem('favorite');


// ...........................................

const fontSizeSelect = document.querySelector('#fontSize');
const colorSelect = document.querySelector('#color');

const fontFamilySelect = document.querySelector('#fontFamily');
const form = document.querySelector('#form');

function readValue(e) {
  e.preventDefault();
  localStorage.setItem('settings', JSON.stringify({
    fontFamily: fontFamilySelect.value,
    fontSize: fontSizeSelect.value,
    fontColor: colorSelect.value,
  }));
  getDataFromStorage();
}
function getDataFromStorage(){
  let result = JSON.parse(localStorage.getItem('settings'));
  let allP = [...document.querySelectorAll('p')];
  for( let el of allP){
    el.style.color = result.fontColor;
    el.style.fontSize = result.fontSize + 'px';
    el.style.fontFamily = result.fontFamily;
  }
}

form.addEventListener('submit', readValue);
window.addEventListener('DOMContentLoaded', getDataFromStorage);
