// 'use strict';
/*
  Написать функцию fetchUserData, которая использует
  apiUrl + текущее значение input для составления запроса.
  
  Формат полного url таков:
    https://api.github.com/users/имя-пользователя
    
  Документация по Git API:
    https://developer.github.com/v3/
    
  С помощью fetch сделать запрос по составленому адресу. 
  Обязательно обработать вариант с ошибкой запроса используя catch. 
  
  Результат запроса вывести в поле result в формате:
    Avatar: аватартка 
    Username: логин
    Bio: описание профиля
    Public repos: кол-во открытых репозиториев
  
  Все необходимые данные есть в ответе от API.
*/

const input = document.querySelector("input");
const submitBtn = document.querySelector("#js-submit");
const result = document.querySelector(".result");
const apiUrl = "https://api.github.com/users/";
let form = document.querySelector('.search-form')
form.addEventListener("submit", fetchUserData);

/*
  @param {FormEvent} evt
*/
function fetchUserData(evt) {
  evt.preventDefault();
  fetch(`${apiUrl}${input.value}`)
    .then(res => res.json())
    .then(data => create(data))
  .catch(err => console.log(err));
  form.reset();
}

function create(el){
  result.innerHTML = '';
    let avatar = document.createElement('img');
    avatar.setAttribute ('src', el.avatar_url);
    let user = document.createElement('p');
    user.textContent = `Username: ${el.login}`;
    let bio = document.createElement('p');
    bio.textContent = `Bio: ${el.bio}`;
    let public = document.createElement('p');
    public.textContent = `Public repos: ${el.public_repos}`;
    result.append(avatar, user, bio,public);
}
