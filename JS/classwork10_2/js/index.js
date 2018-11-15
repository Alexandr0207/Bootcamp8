'use strict';


let ul = document.querySelector('.task-list');
let form = document.querySelector('#form');
let input = document.querySelector('[type="text"]');

function loadTasks() {
  fetch('http://localhost:3001/tasks')
    .then(res => res.json())
    .then(data => createLi(data));
}

function postTasks(e) {
  e.preventDefault(); // Для того що
  let value = input.value; // Для того щоб отримати значення з інпута;
  if (value !== '') { // if для того щоб не вводилась пуста строка // Якщо ми вводим не пусту строку, Fetch вкл
    fetch('http://localhost:3001/tasks', {
        method: 'post',
        body: JSON.stringify({
          text: value
        }), // text- Назва змінної , , , strigify переводимо в JSON';
        headers: {
          'Content-Type': 'application/json',
          // Content-type - це ключ; 'application/json' - це значення
      }
      })
      .then(res => res.json())
      .then(data => createNewLi(data))
  }
  form.reset();
}

function deleteli (e){
  let id = e.target.dataset.id;
  fetch(`http://localhost:3001/tasks/${id}`, { // Міняємо всю силку на фігурну строку , і підключаєм id, щоб удаляти лішку
    method: 'delete', // Це щоб удаляти з сервера! // Delete - Удаляє размєтку на BackEnd;
  }) 
  .then(() => e.target.remove()); // Це щоб удаляти з екрана // remove() Удаляє размєтку на Frontend
}

function updateData(){ // Для того щоб на сервері там де 4 ід обновило новий текст , огірок
  fetch(`http://localhost:3001/tasks/4`, {
    method: 'put',
    body: JSON.stringify({text: 'Огірок'}),
    headers: {
      'Content-Type': 'application/json',
    }
  })
}
updateData();

function createNewLi(obj){
  let li = document.createElement('li');
  li.textContent = obj.text;
  li.setAttribute ('data-id', obj.id);
  ul.append(li);
}

function createLi(arr) {
  for (let el of arr) {
    let li = document.createElement('li'); // створюємо лішку в циклі
    li.textContent = el.text; // і вставляємо в лішку значення text
    li.setAttribute('data-id', el.id);
    ul.append(li);
  }
}
ul.addEventListener('click', deleteli);
form.addEventListener('submit', postTasks); // Навішали на форму
window.addEventListener('DOMContentLoaded', loadTasks);