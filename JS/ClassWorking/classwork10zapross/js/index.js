'use strict';

// https://jsonplaceholder.typicode.com/
// const req = new XMLHttpRequest(); // це WEB API - за допомогою нього можна робити якийсь запрос;
// console.log(req);
// settings
// req.open(method, URL, async);


// // ....// Старий спосіб
// req.open('GET', 'https://jsonplaceholder.typicode.com/users', false); 
// // Вызьми отримай данны з цього сайту, і зроби його сінхронний)
// // Get - отримати інформацію, post - записати інформацію , Delete - видалити, Put - обновити інформацію
// // req.setRequestHeader('Content-Type', 'application/json'); - Щоб був заголовок
// // // req.send([body])
// req.send(); // метод отправки информации!

// // req.abort()

// // status
// // https://developer.mozilla.org/ru/docs/Web/HTTP/Status

// // цей if - перевірка на ошибки

// if (req.status !== 200) { // Перевіряється статус нашого запроса! в if
//     console.error(`${req.status}: ${req.statusText} `) // викидає ошибку
// } else {
//     console.log(JSON.parse(req.response)); // Це якщо все успішно
// }
// // JSON.parse - 
// console.log(`test`);
////////////////.......................///////////////////////
// 200 - успішний запрос, 400 - помилка зі сторони клієнта, 500 - помилка зі сторони сервера

// GET: "ПОЛУЧИТЬ". Запрошенный ресурс был найден и передан в теле ответа.
// HEAD: "ЗАГОЛОВОК". Заголовки переданы в ответе.
// POST: "ПОСЫЛКА". Ресурс, описывающий результат действия сервера на запрос, передан в теле ответа.
// TRACE: "ОТСЛЕЖИВАТЬ". Тело ответа содержит тело запроса полученного сервером.


//    ........///////////////////////////////////////

// 0 - початок
// 1 - викликаний open
// 2 - отримані заголовки
// 3 - отримуємо данні
// 4 - запит закінчено

// const req = new XMLHttpRequest();
// req.open('GET', 'https://jsonplaceholder.typicode.com/users', true); // ТУт вже асінхронний запрос, бо true
// req.setRequestHeader('Content-Type', 'application/json');
// req.send();
// req.onreadystatechange = function () { // Поле куди потрібно записати функцію
//     if (req.readyState !== 4) { // На якому етапі проходе запрос // Перевіряє стан нашого запросу
//         console.log(req.readyState);  
//         return
//     }

//     if (req.status !== 200) {
//         console.error(`${req.status}: ${req.statusText} `)
//     } else {
//         console.log(JSON.parse(req.response));
//     }
// };



// .................................................////////

                                    //    НОВИЙ ЗАПИС!

// fetch('https://jsonplaceholder.typicode.com/users') // Автоматом зробило асінхронний запрос, по дефолту використовується 'GET'!
//   .then(response => console.log(response));
//   зараз прийнято зберігати всю інформацію в форматі JSON
//   response - Названіє параметру функції


// let body = document.querySelector('body');


///////////////////////////////////////////////  // вивести список event в форматі li

// fetch('https://jsonplaceholder.typicode.com/users') // Зчитати інформацію
//   .then(response => response.json())
//   .then(data => datan(data));

// let body = document.querySelector('body');
// function datan(Array){
//     let ul = document.createElement('ul');
//     for(let el of Array){
//       let li = document.createElement('li');
//       li.textContent = el.name;
//       ul.append(li);
//     }
//     body.append(ul);
// }

//////////////////////////////////////////////////////  SS

// вивести список event в форматі li
//////////////////////////////////////////
// JSON.parse(); // з строки в звичайний формат, для відповіді з сервера
// Чтобы получить объект JavaScript из JSON, вы должны разобрать (распарсить) его, операция обратная stringify.


//////////////////////////////////////////////////////
// JSON.stringify(); // З звичайної строки в формат 
// Чтобы использовать stringify, просто передайте объект JavaScript, который вы хотите преобразовать в JSON.

//////////////////////////////////////////////////

// CRUD
// POST - CREATE
// GET - READ
// PUT - UPDATE
// DELETE - DELETE

// endpoint - Точка входу
// resourse - ресурс до якого ми звертаємся
// ? - параметри запроса// Зараз я почну переробляти параметри по зображенях, НАзва параметру - значення
// & - перерахування кількох параметрів запросу
                   //////    
let URL = 'https://pixabay.com/api/?key=5018958-ed49ccd90878e6614abdf24a6&category=backgrounds&order=latest&per_page=9';
fetch(URL) // Зчитати інформацію
  .then(response => response.json())
  .then(data => imgf(data.hits));

function imgf(Array){
    let div = document.querySelector('.div');
    for (let el of Array){
        let img = document.createElement('img');
        img.setAttribute ('src', el.webformatURL);
        div.append(img);
    }
}