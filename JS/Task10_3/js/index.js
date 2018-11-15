'use strict';

/*
  Документация API: https://github.com/trostinsky/users-api#users-api

  Просмотр всех записей: https://test-users-api.herokuapp.com/users/ 

  Написать функцию getUserByName, которая используя REST сервис 
  по адресу https://test-users-api.herokuapp.com/users/
  посылает запрос с name введенным в input.
 
  Результатом fetch будет ответ от сервера, 
  вывести содержимое всего ответа (id, name, age) 
  или 'Такого пользователя в списке нет!'.
*/

const input = document.querySelector("input");
const postBtn = document.querySelector(".js-post");
const result = document.querySelector(".result");
let form = document.querySelector('.search-form');

form.addEventListener("submit", getUserByName);

function getUserByName(evt) {
  evt.preventDefault();
  fetch('https://test-users-api.herokuapp.com/users', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
  })
  .then(res => res.json())
  .then(data => data.data.find (el => el.name === input.value))
  .then(data => create(data))
}

function create(el){
  result.innerHTML = '';
  let id = document.createElement('p');
  id.textContent = (`id: ${el.id}`);
  let name = document.createElement('p');
  name.textContent = `name: ${el.name}`;
  let age = document.createElement('p');
  age.textContent = `age: ${el.age}`;
  result.append(id, name, age);  form.reset();
  form.reset();
}

