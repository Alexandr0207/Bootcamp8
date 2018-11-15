'use strict';

// let title = document.querySelector('.title')
// let text = document.querySelectorAll('p');
// console.log(title);  // Вивели h2 в консоль, достукатися до елемента на сторінці
// console.log(text);

  // |||||||||||||||||||||||||||||||||||||||||||||||
// let texx = [...document.querySelectorAll('p')];
// console.log(texx); // => => => => => => => => => => => => => =>
// (3) [p.text.text--center.par, p.text, p]
// 0: p.text.text--center.par
// 1: p.text
// 2: p
// length: 3
// querySelector - Вибирає один елемент
// querySelectorAll - Вибирає декілька елементів
////////////////////////////////////////////////////////////////////

// let ul = document.querySelector('.list');
// console.log(ul); // Виводить в консоль код як в html ul>li
// // console.log(ul.children); // 
// // HTMLCollection(3) [li#one.item, li.item, li.item, one: li#one.item]
// // 0: li#one.item
// // 1: li.item
// // 2: li.item
// ///////////////////////////////////////////////////////////////////
// // в каждій li є children, це ключі
// // console.log(ul.parentNode); // показує елемент в якому він знаходиться, в нашому випадку div "container"
// // console.log(ul.previousElementSibling); // показує який елемент стоїть попереду ul;
// // console.log(ul.nextElementSibling); // показує який елемент стоїть за ul;

// let text = document.querySelector('.par');
// console.log(text);
// // console.log(text.classList.length); // дліна класу
// // text.classList.add('big-text'); // Добавити класс
// // text.classList.remove('par'); // Удалити класс;
// // text.classList.toggle('par'); // Включатєль , виключатєль, якщо є такий класс, то він його удалить,
// //  якщо немає такого класа, то він його добавить, 
// console.log(text.classList.contains('par')); // дає можливість перевірити наявність класа в hmtl елементі
// // , і видає true або false


////////////////////////////////////////////////////////////////////////////////////////////////////
 
                            // Атрибути

////////////////////////////////////////////////////////////////////////////////////////////////////////

// const lnk = document.querySelector('.link');
// console.log(lnk);
// // // console.log(lnk.hasAttribute('title')); 
// // console.log(lnk.getAttribute('href'));  // Інформація, яка є в атрибуті href

// // lnk.setAttribute('title', 'super link');
// // lnk.setAttribute('id', 'idFromJs');
// let li = document.querySelector('#one');
// console.log(li.dataset.info); // считывает информацию // 55


// let p = document.querySelector('.text').innerHTML;
// console.log(p);

// let ul = document.querySelector('.list');
// console.log(ul.textContent);//
// item 1
// item 2
// item 3


// console.log(ul.innerHTML); //
{/* <li class="item" data-info="55" id="one"><a href="https://www.google.com/" class="link">item 1</a></li>
<li class="item" data-info="second"><a href="1">item 2</a></li>
<li class="item" data-info="third"><a href="2">item 3</a></li> */}

                              // Добавити класс і зробити текст по середині

// let mainTitle = document.createElement('h1');
// mainTitle.classList.add('main-title'); // Добавити класс
// mainTitle.textContent = 'I am Title created from JS'; // добавити текст
// console.log(mainTitle);
// let container = document.querySelector('.container');
// // container.append(mainTitle); // append вставляє в кінець контейнера
// // container.prepend(mainTitle); // prepend втсавляє в початок контейнера
// // container.before(mainTitle); // постав мені заголовок перед контейнером, тіпа за div
// let h2 = document.querySelector('.title');
// h2.replaceWith(mainTitle); // заміняє елемент h1 на h2
// let list = document.querySelector('.list'); // достукатися до того що хочеш удалити
// list.remove(); // удаляє html елемент назавжди
// let input = document.querySelector('.name');
// console.log(input.value);
// let checkbox = document.querySelector('#box'); // Достукатися до квадрата де ставити галочку
// console.log(checkbox.checked); // щоб показало чи галочку поставили, якщо поставили true, якщо ні то false
// let articleTitle = document.querySelector('h2'); // Щоб отримати доступ
// // console.log(articleTitle);  // Щоб отримати доступ
// articleTitle.style.color = 'red'; // Тіпа як в css прописувати стилі
// articleTitle.style.fontSize = '50px'; // Тіпа як в css прописувати стилі
// h2.after(mainTitle); // h1 стане після h2
// let result = mainTitle.cloneNode(true); // зробити копію елемента // true це глубоке копіювання, щоб скопіювало все
// console.log(result); // зробити копію елемента 



///////////////////////////////////////////Створити ссилку, добавити атрибут href , в силочку вставити текстовий 
// контент і вставити в кінець Article

// let art = document.querySelector('.article');
// let a = document.createElement('a');
// a.setAttribute('href', '#'); // Вставляти атрибут в силлку
// a.textContent = 'link';
// art.append(a); // Щоб вставити після Article

//////////////////////////////////////////////////////////////////

// let art = document.querySelector('.article');


//////////////////////////////////////////////////////////////////////////////////

// let art = document.querySelector('.article');
// let str = `<a href ='#'>link</a>`;
// art.innerHTML += str; // Не трогає Заголовок і параграф, і вставе силку, поставе знизу;


