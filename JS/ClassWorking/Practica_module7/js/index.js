'use strict';

//////////////////////////////////////////////////////////////////////////////////////
                     //Практичні
//////////////////////////////////////////////////////////////////////////////////////

/*
  Есть список категорий с классом categories (на вкладке HTML).
  
  Напишите код, который для каждого элемента li (первая вложенность) 
  в списке categories выведет в консоль:
  - Текст непосредственно в нём (название категории)
  - Количество всех вложенных в него элементов li
  
  К примеру:
    Категория: Животные
    Количество вложенных li: 4
*/

// let list = document.querySelectorAll('.categories > li');
// list.forEach(el => console.log(el.firstChild.data.trim(),el.firstElementChild.childElementCount));

///////////////////////////////////////////////////////////////////////////////////////////////////

// /*
//   Дан список с классом .list
// 	- Найдите первого потомка списка и сделайте его текст красного цвета
// 	- Найдите последнего потомка списка и сделайте его текст синего цвета
// */

// let ul = document.querySelector('.list');
// console.log(ul);
// let x = ul.firstElementChild;
// x.style.color = 'red';
// console.log(x);
// let y = ul.lastElementChild;
// y.style.color = 'blue';

///////////////////////////////////////////////////////////////////////////////////////////////////////
// Задание 3
/*
  Дан ul склассом .list и массив строк. 
  
  Вставьте элементы этого массива в ul так, чтобы каждый элемент стоял в своем li.
*/

// 1. Сделать в ul > li 
// 2. В Li Вставить елементи з масіва

// const elements = ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS'];
// let ul = document.querySelector('.list');
// elements.map( el => { // Перебираєм мапом масів і робимо йому заміну el
// let li = document.createElement('li'); // Створюємо Лішку (li)
// li.textContent = el; // Вставляємо всі елементи з масиву elements в li, 
// ul.append(li);  // Вставляємо в ul  Лішку (li)
// });
// console.log(ul); // Перевіряємо результат ul


/////////////////////////////////////////////////////////////////////////////////////////////////////

/*
  Напишите скрипт для создания списка ul.
  
  Для каждого пункта:
    - Запрашивайте содержимое пункта li у пользователя с помощью prompt.
    - Создавайте пункт и добавляйте его к ul.
    - Процесс прерывается, когда пользователь нажимает Cancel.
    - Все элементы списка должны создаваться динамически.
*/

let ul = document.querySelector('ul');
let text;

do{
  text = prompt('Напиши что нибудь');
  if(text !== null ){
    let li = document.createElement('li');
    li.textContent = text;
    ul.append(li);
  } 
} while(
  text !== null
)

