'use strict';

////////////////////////////    Конструкторы     /////////////////////////////////

// const hotel = {
//   name: '7 days',
//   stars: 4,
//   rooms: 150,
//   hasSwPool: true,
//   hasCort: false,
//   showName() {
//     console.log(`${hotel.name}`);
//   },

//   changeRooms(number) {
//     hotel.rooms = hotel.rooms - number;
//     return hotel.rooms;
//   },

//   openCort() {
//     hotel.hasCort = !hotel.hasCort; // ! - щоб стало значення наоборот, з false стало true
//   },

// }

// console.log(hotel.stars);
// hotel.showName();
// hotel.changeRooms(10);
// console.log(hotel.rooms);
// hotel.openCort();
// console.log(hotel.hasCort);

///////////////////////////// this - Коли міняєш назву обьєкта, щоб все міняло в обьєкті

//////////////////////////                       ///
//


// const motel = {
//   name: '7 days',
//   stars: 4,
//   rooms: 150,
//   hasSwPool: true,
//   hasCort: false,
//   showName() {
//     console.log(`${this.name}`);
//   },

//   changeRooms(number) {
//     this.rooms = this.rooms - number;
//     return this.rooms;
//   },

//   openCort() {
//     this.hasCort = !this.hasCort; // ! - щоб стало значення наоборот, з false стало true
//   },

//   // showThis(){
//   //   console.log(this);  // Щоб вивести весь обьєкт готель, тоесть всі ключі і всі їх характеристики
//   // } // {name: "7 days", stars: 4, rooms: 150, hasSwPool: true, hasCort: false, …}

//   wrapper () {
//     const showThis = () => {
//       console.log('Show this',this); // Show this {name: "7 days", stars: 4, rooms: 150, hasSwPool: true, hasCort: false, …}
//     }; // 
//     showThis();
//   }                  
// }

// // function showThis(){
// //   console.log(this);
// // }
// motel.wrapper(); // Show this {name: "7 days", stars: 4, rooms: 150, hasSwPool: true, hasCort: false, …}
// // motel.showThis(this); // {name: "7 days", stars: 4, rooms: 150, hasSwPool: true, hasCort: false, …}
// // console.log(motel.stars);
// // motel.showName();
// // motel.changeRooms(10);
// // console.log(motel.rooms);
// // motel.openCort();
// // console.log(motel.hasCort);

///////////////////////////////////////////////////////////////////////////////////////////////
// СЛОВНИК

//
// КОНТЕКСТ ВИКОНАННЯ - це ссилка на обьєкт який запускає нашу функцію;
//
// ЯКЩО БУДЕ ВВІМКНЕНИЙ СТРОГИЙ РЕЖИМ, ТО В КОНСОЛЬ ВИКИНЕ undefineded;
//                                 
// ЯКЩО БУДЕ ВИМКНЕНИЙ СТРОГИЙ РЕЖИМ, ТО В КОНСОЛЬ ВИКИНЕ window!;
//                               
// 

//////////////////////////////////////////////////////////////////////////////////////////////
// 
/////////////////////////////////////////////////////////////////////////////////////////////

// const hotel = {
//   name: 'Resort Hotel',
//   price: 2500,
// };
// const hotel2 = {
//   name: '4 Seasons Hotel',
//   price: 500,
// };
// const hotel3 = {
//   name: '7 days Hotel',
//   price: 700,
// };

// function showInfo(){
//   console.log(`${this.name} and ${this.price}`);
// }

// showInfo.call(hotel); // візьми мені функцію showInfo запусти її (call) з обьєктом номер 0
// showInfo.call(hotel2); // візьми мені функцію showInfo запусти її (call) з обьєктом номер 2
// showInfo.call(hotel3); // візьми мені функцію showInfo запусти її (call) з обьєктом номер 3

// /////////////////////////////////////////////////////
// // .call - запустити обьєкт

///
// Метод CALL
///////////////////////////////////////////////////////////////////////////////////

// const hotel = {
//   name: 'Resort Hotel',
//   price: 2500,
// };
// const hotel2 = {
//   name: '4 Seasons Hotel',
//   price: 500,
// };
// const hotel3 = {
//   name: '7 days Hotel',
//   price: 700,
// };

// function showInfo(name, age){
//   console.log(`Hello ${name} you live in ${this.name} and ${this.price} ${age}`);
// }

// showInfo.call(hotel, 'Homer', 25);  // Hello Homer you live in Resort Hotel and 2500 25
// showInfo.call(hotel2, 'Fry', 5); 
// showInfo.call(hotel3, 'Gold', 32);

/////////////////////////////////////////////////////
// .call - запустити обьєкт


////////////////////////////////////////////////////////////////////
// Метод Apply
//////////////////////////////////////////////////////////////////////////////////////

// const hotel = {
//   name: 'Resort Hotel',
//   price: 2500,
// };
// const hotel2 = {
//   name: '4 Seasons Hotel',
//   price: 500,
// };
// const hotel3 = {
//   name: '7 days Hotel',
//   price: 700,
// };

// function showInfo(name, age){
//   console.log(`Hello ${name} you live in ${this.name} and ${this.price} ${age}`);
// }

// showInfo.apply(hotel, ['Homer', 25]); // Hello Homer you live in Resort Hotel and 2500 25
// showInfo.apply(hotel2, ['Fry', 5]); 
// showInfo.apply(hotel3, ['Gold', 32]);

// call - записується все через кому
// arr - записується все через массів


//////////////////////////////////////////////////////////////////////////////////////
//
//////////////////////////////////////////////////////////////////////////////////////



///    Метод Bind - ніколи не модифікує оригінальну функцію, 
/// создає копію і змінює її 
//////////////////////////////////////////////////////////////////////////////////////
// const hotel = {
//   name: 'Resort Hotel',
//   price: 2500,
// };
// const hotel2 = {
//   name: '4 Seasons Hotel',
//   price: 500,
// };
// const hotel3 = {
//   name: '7 days Hotel',
//   price: 700,
// };

// function showInfo(name = 'User', age = 18){ 
//   console.log(`Hello ${name} you live in ${this.name} and ${this.price} ${age}`);
// }
// const boundShowInfo = showInfo.bind(hotel); 
// boundShowInfo(); // Hello User you live in Resort Hotel and 2500 18

///////////////////////////////////////////////////////////////////////////////////////

// const hotel = {
//   name: 'Resort Hotel',
//   price: 2500,
// };
// const hotel2 = {
//   name: '4 Seasons Hotel',
//   price: 500,
// };
// const hotel3 = {
//   name: '7 days Hotel',
//   price: 700,
// };

// function showInfo(name, age){
//   console.log(`Hello ${name} you live in ${this.name} and ${this.price} ${age}`);
// }
// const boundShowInfo = showInfo.bind(hotel);
// boundShowInfo(); // Hello undefined you live in Resort Hotel and 2500 undefined

////////////////////////////////////////////////////////////////////////////////////////
// 
///////////////////////////////////////////////////////////////////////////////////////





////////////////////////////////////////////////////////////////////////////////////////
//  ///////////////////   КОНСТРУКТОРИ!
/////////////////////////////////////////////////////////////////////////////////////////

// const Tank = {
//   speed: 100, 
//   armor: 50,
//   life: 100,
//   damage: 20,
//   amunition: 10,
//   name:  'Tiger',
//   nickName: 'Tankist',
//   x: 0,
//   y: 0,

//   move(a,b) {
//     this.x = a;
//     this.y = b;
//   },

//   fire() {
//     this.amunition > 0 ?  this.amunition -= 1 : alert ('Enter card number');   
//   },

//   heal(size) {
//     this.life + size > 100 ? this.life = 100 : this.life += size;
//   },
// }

// Tank.move(50,150);
// Tank.fire();
// Tank.fire();
// Tank.fire();
// Tank.life = 50;
// Tank.heal(25);
// console.log(Tank);

///////////////////////////////////////////////////////////////////////////////////////////////
// Шаблон по танках (Конструктор)  this - це як обьєкт
///////////////////////////////////////////////////////////////////////////////////////////////

// пишемо Tank - Якщо з великої букви, то це конструктор
// Ті всі змінні які міняються , пишемо в параметри нашої функціїї
// function Tank(speed, amunition, armor, nickName, x, y) {
//   // this = {}
//   this.speed = speed;
//   this.armor = armor;
//   this.life = 100; // - якщо задаємо руками, то ця інформація не буде дальше змінюватися
//   this.damage = 20;
//   this.name = 'Tiger';
//   this.nickName = nickName;
//   this.amunition = amunition;
//   this.x = x;
//   this.y = y;
//   this.move = function (a, b) {
//     this.x = a;
//     this.y = b;
//   };
//   this.fire = function () {
//     this.amunition > 0 ? this.amunition -= 1 : alert('Enter card number');
//   };
//   this.heal = function (size) {
//     this.life + size > 100 ? this.life = 100 : this.life += size;
//   };
//   // return this;

// }
// // Хочу створити нові параметри
// let tiger = new Tank(50, 8, 100, 'Tankist', 50, 50); // Пишемо в дужки значення з функції, наприклад (speed = 50, amunition = 8)
// let tester = new Tank(55, 18, 150, 'Tester', 10, 12); // Пишемо в дужки значення з функції, наприклад (speed = 50, amunition = 8)
// tiger.move(50,56); // Якщо хочу щось змінити в функції
// console.log(tiger);
// console.log(tester); 
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// let a = {};
// a.start = 10;   // Записати в обьєкт
// a.end = 20;
// a.f = 100;
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// function showInfo() {
//   console.log(`${this.first} ${this.last} ${this.year} ${this.passed}`);
// }

// showInfo() { // Новий спосіб
//   console.log(`${this.first} ${this.last} ${this.year} ${this.passed}`);
// }

// for ( let el of scientist) {
//   showInfo.call(el);
// }
// el.showInfo(); - для того що вивести всі обьєкти в консоль
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

const hotel = {
  stars: 5,
  capacity: 100,
};

console.log( hotel.name ); // 