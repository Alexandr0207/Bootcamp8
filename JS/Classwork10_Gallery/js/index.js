'use strict';

let container = document.querySelector('#container')
let text = document.querySelector('.input');
let enter = document.querySelector('.btn')
let box = document.querySelector('.box');
box.addEventListener('submit', submit);
window.addEventListener('DOMContentLoaded', submit);
function submit(){
  event.preventDefault();
  let URL = `https://pixabay.com/api/?key=5018958-ed49ccd90878e6614abdf24a6&q=${text.value}&order=latest&per_page=9`;
  fetch(URL) // Зчитати інформацію
  .then(response => response.json())
  // .then(data => console.log(data))
  .then(data => gallery(data.hits));
}

function gallery(Array){
  container.innerHTML = '';
  for ( let el of Array ){
    let div = document.createElement('div');
    div.classList.add ('one')
    let p = document.createElement('p');
    p.textContent = el.tags;
    div.append(p);
    let img = document.createElement('img');
    img.setAttribute ('src', el.webformatURL);
    div.append(img);
    container.append(div)
  }
}

