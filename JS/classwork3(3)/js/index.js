// 'use strict'

// function counter(){
//   let count = 0;
//   function increment(){
//     count++;
//     console.log(count);
//   }
//   return increment;
// }

// let user = counter();
// user();
// user();
// user();
// user();
// user();


///////////Обьекти

// const HOTEL_NAME = 'Resort Hotel';
// const STARS = 5;
// const STATUS = 'LUX';
// const ROOM_NUMBERS = 100;

// /// create object
// const HOTEL = {
//   name: 'Resort Hotel',
//   stars: 5,
//   status: 'LUX',
//   capacity: 100,
//   personal: ['Bob', 'Homer', 'Bender'],
// };
// let key = 'status';
// // Консоль лог, Спочатку назва обьекта, потім імя ключа
// // console.log(HOTEL.name);
// // console.log(HOTEL.personal[0]); // Щоб достукатись до масіва Personal і дальше по счоту від 0;
// // console.log(HOTEL.stars);
// // console.log(HOTEL['status']); // Ще такий спосіб достукатись до ключа.
// // console.log(HOTEL[key]); -
// // console.log(HOTEL.key);

// ////
// // Добавити новий обьект в готель
// HOTEL.manager = 'Chack Noris'; // Знайди мені обьект готель, і впиши в нього обьєкт manager;
// HOTEL.stars = 10; // Перезаписало зірки в отелі, з stars = 5 зробило stars = 10;
// delete HOTEL.personal; // Удалити ключ персонал
// console.log(HOTEL);


////////////////////////////////////////////////////////////////////////////////////////////////

// let name = 'Bob';
// let stars = 10;

// const hotel = {
//   name, 
//   stars,
// }               //// Спрощує запис коду
// console.log(hotel);

///////////////////////////////////////////////////////////////////////////////////////////////////

// const hotel = {
//   name: "Resort Hotel",
//   stars: 5,
//   pool: {
//     volume: '50m',
//     temp: '25C',
//   }
// };

// let hasStars = hotel.hasOwnProperty('pool');
// console.log(hasStars);
// ----Methods

// const BMW = {
//   wheels: 4,
//   color: 'red',
//   year: 2018,
//   model: 'X5',
//   fullComplect: false,
//   move: function () {
//     console.log('I`m move'); // Можем функцію записати таким способом,
//   },
//   stop() {
//     console.log('Stoped'); // а можем і таким,,,,
//   }
// }

// BMW.move(); // Запускаємо ключ в обьєкті 
// BMW.stop(); // Запускаємо ключ в обьєкті


///////////////////////////////////////////////////////////////////////////////

// const obj1 = {
//   name: "chack",
// };
// let obj2 = obj1;
// obj1.age = 50;
// console.log(obj1);
// console.log(obj2);

////////////////////////////////////////////////////////////////////////////////////

// let user = {
//   name: 'Bob', 
//   age: 45,
//   isHappy: true,
// }
// let user2 = Object.assign({}, user); /// Зовсім другий обьект, який скопіював повністю user
// console.log(user);
// console.log(user2);

// let user3 = Object.assign({user});
// console.log(user3);   ///// Щоб скопіювати тільки Name, age i isHappy з let user

// const first = {name: 'Tony'};
// const last = {lastName: 'Stark'};

// Object.assign(first, last); // Щоб з'єднати 2 конст
///////////////////////////////////////////////////////////////////////////
//  ...  - Спред оператор,  spread - розділяти;

// const a = {
//   x: 1,
//   y: 2
// };
// const b = {
//   x: 0,
//   z: 3
// };

// // .....///// const c = Object.assign({}, a , b);

// const c = {
//   ...a,  // x:1, y2 // - копіруєм все що є в конст а, візьми мені всі ключі які є в операторі а і помісти сюда
//   ...b, // x:0, y:2, z:3;
// }
// console.log(c);

////////////////////////////////////////////////////////////////////////////

// let hotel = {
//   name: '7 days',
//   stars: 4,
//   rooms: 15,
// }



////////////////////////////////////////////////////////////////////////

// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5, 
//   capacity: 100,
// };

// const keys = Object.keys(hotel); // -- Виводить масів з обьєктами // (3) ["name", "stars", "capacity"];
// const values = Object.values(hotel);  // -- Виводить масів значень // (3) ["Resort Hotel", 5, 100];
// // console.log(keys);
// // console.log(values);
// const entries = Object.entries(hotel); // -- Виводить масів обьєктів і значень , те що було попереду, тільки разом
// console.log(entries);


///////////////////////////////////////////////////////////////////////////////

// // Є обьєкт, потрібно витягти дані, щоб працювати з ними дальше
// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
// };

// // 1) Спосіб
// // let name = hotel.name;
// // let stars = hotel.stars;
// // let capacity = hotel.capacity;
// // 2) Спосіб
// const { name, stars, capacity } = hotel; // Деструктирізація 
// console.log(name );

///////////////////////////////////////////////////////////////////////////////////////////
/////
///////////////////////////////////////////////////////
// let dog = {
//   name: 'Mango',
//   age: 5,
//   isHappy: true,
// };
// // 1 спосіб
// function showObjVal(obj) {
//   console.log(obj.name);
//   console.log(obj.age);
//   console.log(obj.isHappy);
// }

// showObjVal(dog);
// // 2 спосіб
// function showObjVal({name, age, isHappy}) {
//   console.log(name);
//   console.log(age);
//   console.log(isHappy);
//   // return `dog name is ${name} age is ${age} happy ${isHappy}`;
// }
// //
// showObjVal(dog);

////////////////////////////////////////////////////////////////////////////////////////////
//  Елементи масиву
// let strNum = ['one', 'twoo', 'three'];
// // console.log(strNum [0], strNum [1], strNum [2]); // 1 спосіб побачити елементи масиву
// let [a,b,c] = strNum; // 2 спосіб як перший, тільки елементи не в строку а в стовпчик
// console.log(a);
// console.log(b);
// console.log(c);

/////////////////////////////////////////////////////////////////////////////////////////

/*  
  Напишите скрипт, который, для объекта user, последовательно: 
  
    - добавляет поле mood со значением 'happy'
    
    - заменяет значение hobby на 'javascript'
    
    - удаляет свойство premium
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя цикл for...in
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя Object.keys и for...of
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя Object.entries и for...of
*/
// function checkPeople(people) {
//   const user = {
//     name: "Mango",
//     age: 20,
//     hobby: "html",
//     premium: true
//   } 
//   user.mood = 'happy';
//   delete user.hobby;
//   user.javascript = 'html'
//   delete user.premium;
//   console.log(user);
//   for(let key in user){ // Створюємо змінну key в hotel, щоб знайти ключ
//     if(user.hasOwnProperty(key)){ // Чи дійсно наш обьєкт готель має свої ключі
//       console.log(`${key} : ${user[key]}`); // Зручний спосіб щоб в консоль було видно name : 7 days. 
//     }
//   }
//   const keys = Object.keys(user);
//   console.log(keys);
//   const entries = Object.entries(user); // -- Виводить масів обьєктів і значень , те що було попереду, тільки разом
//   console.log(entries);
// } 
// checkPeople();


///////////////////////////////////////////////////////////////////////////////////

/*
  Напиште скрипт который определит и выведет в консоль 
  имя сотрудника который выполнил больше всех задач.

  Сотрудники и кол-во выполненых задач содержатся 
  как свойства объекта в формате "имя":"кол-во задач"
*/

// const tasksCompleted = {
//   ann: 29,
//   david: 35,
//   helen: 1,
//   lorence: 99
// };
// let num = 0; // Создаем переменную num 
// let keys; // Переменную keys
// for (let key in tasksCompleted){  // в for создаем переменную let key к обьекту tasksCompleted
//   if(num < tasksCompleted[key] ){ /// Если число меньше обьекта, в котором переменная key 
//     num = tasksCompleted [key]; /// То прировняй число к обьекту
//     keys=key; // Переменную keys прировняем к обьекту.
//   }
// }
// console.log(`${keys} : ${num}`); // Покажи Значение и число// Значение: число. 


const num = [ grapes, oranges, apples ] = [10,2]
console.log(num);