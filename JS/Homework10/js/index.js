'use strict';

/*
  Написать приложение для работы с REST сервисом, 
  все функции делают запрос и возвращают Promise 
  с которым потом можно работать. 
  
  Реализовать следующий функционал:
  - функция getAllUsers() - должна вернуть текущий список всех пользователей в БД.
  
  - функция getUserById(id) - должна вернуть пользователя с переданным id.
  
  - функция addUser(name, age) - должна записывать в БД юзера с полями name и age.
  
  - функция removeUser(id) - должна удалять из БД юзера по указанному id.
  
  - функция updateUser(id, user) - должна обновлять данные пользователя по id. 
    user это объект с новыми полями name и age.
  Документацию по бэкенду и пример использования прочитайте 
  в документации https://github.com/trostinsky/users-api#users-api.
  Сделать минимальный графический интерфейс в виде панели с полями и кнопками. 
  А так же панелью для вывода результатов операций с бэкендом.
*/
let turn = document.querySelector('.turn');
const getAllUserBtn = document.querySelector('.js-get-all-users');
const api = 'https://test-users-api.herokuapp.com/users/';
const addUserBTN = document.querySelector('.js-add-user')
const inputUpdate = document.querySelector('.input-user-id-update');
const UpdateBTN = document.querySelector('.js-update-user');
const formUpdate = document.querySelector('.search-formup');

function getAllUsers() {
  event.preventDefault();
  turn.innerHTML = '';
  fetch(api) // Зчитати інформацію
    .then(response => response.json())
    .then(data => createLi(data.data))
    .catch(err => console.log(err))
}

function createLi(arr) {
  const ul = document.querySelector('.js-list');
  if (Array.isArray(arr)) {
    for (let el of arr) {
      const li = document.createElement('li');
      li.classList.add('sss');
      li.innerHTML = `<p>ID: ${el.id}</p><p>NAME: ${el.name}</p><p>AGE: ${el.age}</p>`;
      ul.append(li);
    }
  } else {
    const li = document.createElement('li');
    li.classList.add('sss');
    li.innerHTML = `<p>ID: ${arr._id}</p><p>NAME: ${arr.name}</p><p>AGE: ${arr.age}</p>`;
    ul.append(li);
  }
}

getAllUserBtn.addEventListener('click', getAllUsers);

// function getUserById(id) {

// }



function addUser() {
  event.preventDefault();
  // console.log(prex);
  let prex = prompt('Введите имя');
  let prix = prompt('Введите возраст');
  let obj = {
    name: prex,
    age: prix,
  }
  fetch(api, {
      method: 'POST',
      body: JSON.stringify(obj),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    }).then(res => res.json())
    .then(data => createLi(data.data))

}
addUserBTN.addEventListener('click', addUser);


function updateUser(e) {
  e.preventDefault();
  let name = prompt('Введите имя для замены');
  let age = prompt('Введите возвраст для замены');
  let obi = {
    name: name,
    age: age,
  }
  fetch(`api${inputUpdate.value}`), {
  method: 'PUT',
  body: JSON.stringify(obi),
  headers: {
    'Content-Type': 'application/json',
  }
}
}
formUpdate.addEventListener('submit', updateUser);
