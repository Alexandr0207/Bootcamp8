'use strict';

// const users = [
//   {
//     id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     phone: '+1 (848) 556-2344',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     skills: ['ipsum', 'lorem'],
//     gender: 'male',
//     age: 37,
//   },
//   {
//     id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     phone: '+1 (855) 582-2464',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
//     gender: 'female',
//     age: 34,
//   },
//   {
//     id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     phone: '+1 (814) 593-3825',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
//     gender: 'male',
//     age: 24,
//   },
//   {
//     id: '249b6175-5c30-44c6-b154-f120923736f5',
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     phone: '+1 (909) 547-2687',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     skills: ['adipisicing', 'irure', 'velit'],
//     gender: 'female',
//     age: 21,
//   },
//   {
//     id: '334f8cb3-eb04-45e6-abf4-4935dd439b70',
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     phone: '+1 (956) 512-2693',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     skills: ['ex', 'culpa', 'nostrud'],
//     gender: 'male',
//     age: 27,
//   },
//   {
//     guid: '150b00fb-dd82-427d-9faf-2879ea87c695',
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     phone: '+1 (876) 411-2433',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     skills: ['non', 'amet', 'ipsum'],
//     gender: 'male',
//     age: 38,
//   },
//   {
//     id: 'e1bf46ab-7168-491e-925e-f01e21394812',
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     phone: '+1 (979) 504-2554',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     skills: ['lorem', 'veniam', 'culpa'],
//     gender: 'female',
//     age: 39,
//   },
// ];

// let arr = ['a', 't', 'c'];
// arr.sort();
// console.log(arr);

// users.sort(function(a,b){
//   return a.age - b.age;
// })



// ................................................................

// ... - Оператор

// let a = {
//   a: 1,
//   b: 2,
//   c: 3,
// }

// let b = {
//   j: 3,
//   g: 8,
//   f: 7,
// }

// let c = { // Візьми мені в обьєкт с встав ключі з обьєкта а і з обьєкта b
//   ...a,
//   ...b,
// }

// console.log(c); // {a: 1, b: 2, c: 3, j: 3, g: 8, …}
//                        a: 1
//                        b: 2
//                        c: 3
//                        f: 7
//                        g: 8
//                        j: 3

///////////////////////////////////////////////////////////////////////////

// function sum(...args) {
//   console.log(args);
// };
// sum(4, 5, 6, 7, 8, 9, 10, {
//   q: 5,
//   b: 10
// });


////////////////////////////////////////////////////////////////////////

// Цикл for of працює тільки з масивами
// let numbers = [4, 5, 65, 56, 43, 5, 34, 45, 7];
// let arr = []
// for (let el of numbers){
//   arr.push(el*el); // коли хочемо дізнатись від 
// }
// console.log(arr);

let c = 0;

// while (c < 10){
//   console.log(c);
//   c++;
// } // Це коли спочатку подумав що він має робити і робить

do {
  console.log(c); // а тут коли спочатку зробив, а потом подумав
  c++
} while( c < 10){
  // console.log(c);
  c++
}