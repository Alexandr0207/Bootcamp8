'use strict';

/*
  Написать функцию fetchCountryData, которая использует
  apiUrl + текущее значение input для составления запроса.
  
  Формат полного url таков:
    https://restcountries.eu/rest/v2/name/имя-страны
    
  С помощью fetch сделать запрос по составленому 
  адресу. Обязательно обработать вариант с ошибкой запроса
  используя catch. 
  
  Результат запроса вывести в поле result в формате:
    Country name: имя страны
    Capital: столица
    Main currency: название денежной единицы
    Flag: флаг страны
  
  Все необходимые данные есть в ответе от API.
  
  PS: при отправке формы перезагружается страница,
  решите эту задачу вспомнив о том, как остановить
  поведение по умолчанию.
*/

const input = document.querySelector("input");
const submitBtn = document.querySelector(".js-submit");
const result = document.querySelector(".js-result");
const apiUrl = "https://restcountries.eu/rest/v2/name/";
submitBtn.addEventListener("click", fetchCountryData);
const form = document.querySelector(".search-form");
/*
  @param {FormEvent} evt
*/
function fetchCountryData(evt) {
  evt.preventDefault();
  fetch(`${apiUrl}${input.value}`)
    .then(res => res.json())
    .then(data => create(data))
  .catch(err => console.log(err));
  form.reset();
}

function create(arr){
  result.innerHTML = '';
  for(let el of arr){
    let name = document.createElement('p');
    name.textContent = (`Country name: ${el.name}`);
    let capital = document.createElement('p');
    capital.textContent = (`Capital: ${el.capital}`);
    let main = document.createElement('p');
    main.textContent = (`Main currency: ${el.currencies[0].code}`);
    let flag = document.createElement('img');
    let fflag = document.createElement('span');
    fflag.textContent = (`Flag:`);
    // flag.textContent = ()
    flag.setAttribute ('src', el.flag);
    fflag.append(flag);
    result.append(name, capital, main,fflag);
  }
}
