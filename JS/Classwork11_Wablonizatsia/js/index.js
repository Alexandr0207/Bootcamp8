'use strict';

// const context = {
//   city: "London",
//   street: "Baker Street",
//   number: "221B"
// };

// 1 завдання
// // 1) Отримати доступ до шаблона
// const source = document.querySelector('#address-template').innerHTML.trim();
// // console.log(source);

// ///////////////////////////////////////////////////////

// // 2) Потрібно запустити службову функцію шаблонізатора, щоб вона запустила шаблон
// const temp = Handlebars.compile(source);
// // console.log(temp);

// ///////////////////////////////////////////////////////

// // 3) Передаємо в функцію об'єкт;
// const mark = temp(context);
// console.log(mark); // Отримуємо <p>You can find me in London . My address is 221B Baker Street</p>;

// // 4) Готову розмітку з консоль лога потрібно вставити на екран;
// const container = document.querySelector('.content-placeholder');
// container.innerHTML = mark; // Отримуємо текст на екрані ::: You can find me in London . My address is 221B Baker Street;

// ////////////////////////////////////////////////////////
//                     // The END!
// ////////////////////////////////////////////////////////


// 2 задвання

// const info = {
//   title: 'Handlebars',
//   helpers: 'Each and if',
//   func: 'compile'
// }

// // 1) Отримати доступ до шаблона
// const source = document.querySelector('#address-template').innerHTML.trim();
// // console.log(source);

// ///////////////////////////////////////////////////////

// // 2) Потрібно запустити службову функцію шаблонізатора, щоб вона запустила шаблон
// const temp = Handlebars.compile(source);
// // console.log(temp);

// ///////////////////////////////////////////////////////

// // 3) Передаємо в функцію об'єкт;
// const mark = temp(info);
// console.log(mark); // Отримуємо <p>You can find me in London . My address is 221B Baker Street</p>;

// // 4) Готову розмітку з консоль лога потрібно вставити на екран;
// const container = document.querySelector('.content-placeholder');
// container.innerHTML = mark; // Отримуємо текст на екрані ::: You 

//////////////////////////////////////////////////
///////////////////////////////////////////////////
//////////////////////////////////////////////////

// 3 завдання

// const data = {
//   people: [
//       {firstName: 'Homer', lastName: 'Simpson'},
//       {firstName: 'Peter', lastName: 'Griffin'},
//       {firstName: 'Eric', lastName: 'Cartman'},
//       {firstName: 'Kenny', lastName: 'McCormick'},
//       {firstName: 'Bart', lastName: 'Simpson'}
//   ]
// };

// const source = document.querySelector('#example-template').innerHTML.trim(); // Стукаємся до нашого шаблона, і TRIM
// const temp = Handlebars.compile(source);
// const mark = temp(data);
// const container = document.querySelector('.content-placeholder');
// container.innerHTML = mark; 

//////////////////////////////////////////////////
///////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////
//////////////////////////////////////////////////



// 4 завдання

// const data = {
//   people: [
//       {firstName: 'Homer', lastName: 'Simpson'},
//       {firstName: 'Peter', lastName: 'Griffin'},
//       {firstName: 'Eric', lastName: 'Cartman'},
//       {firstName: 'Kenny', lastName: 'McCormick'},
//       {firstName: 'Bart', lastName: 'Simpson'}
//   ],
//   temp: ['a', 'b', 'c' , 'd'] - це виводимо, масів з елементами
// };

// // Вивели а , б , с ,д;

// const source = document.querySelector('#example-template').innerHTML.trim(); // Стукаємся до нашого шаблона, і TRIM
// const temp = Handlebars.compile(source);
// const mark = temp(data);
// const container = document.querySelector('.content-placeholder');
// container.innerHTML = mark; 

//////////////////////////////////////////////////
///////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////
//////////////////////////////////////////////////



// 5 завдання 

// const menuData = {
//   title: 'Eat it createElement, templates rule!',
//   items: ['Handlebars', 'LoDash', 'Pug', 'EJS']
// };

// const source = document.querySelector('#example-template').innerHTML.trim(); // Стукаємся до нашого шаблона, і TRIM
// const temp = Handlebars.compile(source);
// const mark = temp(menuData);
// const container = document.querySelector('.content-placeholder');
// container.innerHTML = mark; 


//////////////////////////////////////////////////
///////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////
//////////////////////////////////////////////////


// 6 завдання

// const data = {
//   animals: [
//       {
//           name: "cow",
//           noise: "moooo"
//       },
//       {
//           name: "cat",
//           noise: "meow"
//       },
//       {
//           name: "fish",
//           noise: ""
//       },
//       {
//           name: "farmer",
//           noise: "Get off my property!"
//       }
//   ]
// };

// let source = document.querySelector('#built-in-helpers-template').innerHTML.trim();

// let tmp = Handlebars.compile(source);

// let mark = tmp(data);

// let container = document.querySelector('.content-placeholder');

// container.innerHTML = mark;

//////////////////////////////////////////////////
///////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////
//////////////////////////////////////////////////


// Завдання 7


const gallery = {
  title: 'Gallery',
  items: [
      {img: 'https://placeimg.com/300/150/animals', text: 'animals'},
      {img: 'https://placeimg.com/300/150/arch', text: 'architecture'},
      {img: 'https://placeimg.com/300/150/nature', text: 'nature'},
      {img: 'https://placeimg.com/300/150/people', text: 'people'},
      {img: 'https://placeimg.com/300/150/tech', text: 'tech'},
      {img: 'https://placeimg.com/300/150/any', text: 'random'}
  ]
};

let source = document.querySelector('#built-in-helpers-template').innerHTML.trim();
let tmp = Handlebars.compile(source);
let mark = tmp(gallery);
let container = document.querySelector('.gallery-content');
container.innerHTML = mark;