'use strict'

// Прототипы//
// let animal = {
//   canEat: true,
//   canSleep: true,
//   canWalk: true,
//   canJump() {
//       return 'I can jump';
//   }
// };



// // let dog = {
// //   canBark: true,
// //   canSwim: true,
// // };


// console.log(animal);
// // console.log(dog);
// let dog = Object.create(animal); // наследование всех свойств от animal + создание нового обьекта
// console.log(animal);
// dog.canBark = true;
// dog.canSwim = true;
// console.log(dog);
// console.log(dog.canSwim);
// console.log(dog.canWalk);

//////////////////////////////////////////////////////////////////
// function Human (name, age, gender) {
//   this.name = name;
//   this.age = age;
//   this.gender = gender;
//   this.breathe = function() {
//     console.log(`${this.name} can breathe`);
//   };
//   this.walk = function() {
//     console.log(`${this.name} can walk`);
//   };
//   this.speak = function(words) {
//     console.log(`${this.name} say ${words}`);
//   };
//   this.fullInfo = function() {
//     console.log(`I am ${this.name} ${this.age} ${this.gender}`);
//   };
 // Виносимо в прототип всі функції які будуть мати однакові значення, всі функції які матимуть різні данні залишаємо в конструкторі
// }
// Human.prototype.fullInfo = function() { // помыстили функцію фулінфо забрали з конструктора і добалили в прото щоб не створювати окремо два рази для полі і манго окремо
//   console.log(`I am ${this.name} ${this.age} ${this.gender}`);
// };
// Human.prototype.speak = function(words) {
//   console.log(`${this.name} say ${words}`);
// };
// Human.prototype.walk = function() {
//   console.log(`${this.name} can walk`);
// };
// Human.prototype.breathe = function() {
//   console.log(`${this.name} can breathe`);
// };
// Human.prototype.friends = ['Bob', 'Jack', 'Bill'];
// let poly = new Human('Poly', 1, 'female');
// let mango = new Human('Mango', 2, 'male');
// console.log(poly);
// console.log(mango);
// mango.speak('Hello');
// poly.speak('Hi')
// console.log(mango.friends);
// poly.friends.pop(); // В прототайпі всі характеристики і змінні спільні для всіх. Якщо хтось одни змінєю їх вони змінюються для всіх( в конструкторі всі властивості різні для кожного окремо)
// console.log(mango.friends);
// __proto__ // це ключ всередині об'єкта який створила нам функція конструктор(екземпляр)
// prototype // це поле всередині функції конструктора де зберігаються об'єкти
// function Ukrainian (name, age, gender, national) {
//   Human.call(this, name, age, gender);
//   this.national = national;
// }
// Ukrainian.prototype = Object.create(Human.prototype);
// Ukrainian.prototype.constructor = Ukrainian;
// const uk = new Ukrainian('Petro', 25, 'male', 'ukrainian');
// console.log(uk);
// Задача 1//
// 1) Створити конструктор User шо буде мати поля name, surname
// 2) Додати метод getFullName() що виводить на екран імя і прізвище
// 3) Створити конструктор Student шо буде наслідуватися від User
// 4) Властивості  name, surname буде наслідувати від User і буде мати власну властивість yearIn (рік вступу)
// 5) Для студента додати метод getCourse() що показує курс на якому навчається зараз студент (від поточного року відняти рік вступу)
// 6) Додати студенту метод getFullInfo() який бере інформацію з батьківського метода getFullName() і свого getCourse() і виводить її на екран
// function User(name, surname){
//   this.name = name;
//   this.surname = surname;
// }
// User.prototype.getFullName = function() {
//   return `Ім'я: ${this.name}, прізвище: ${this.surname}`;
// }
// function Student(name, surname,yearIn){
//   User.call(this,name, surname);
//   this.yearIn = yearIn;
// }
// Student.prototype = Object.create(User.prototype);
// Student.prototype.constructor = Student;
// Student.prototype.getCourse = function(){
//   this.year = 2018;
//   this.course = this.year - this.yearIn;
//   return `Студент навчається на ${this.course} курсі`;
// }
// Student.prototype.getFullInfo = function(){
//   console.log(`${this.getFullName()} ${this.getCourse()}`);
// }
// let mango = new User('Коля', 'Ращук');
// let poly = new Student('Діма', 'Абрамов', 2014);
// mango.getFullName();
// poly.getCourse();
// poly.getFullInfo();
// Модуль 6 доп завдання 1//
// Создать функцию-конструктор Account, которая добавляет будущему
//  объекту поля login, email и friendsCount.
//  В prototype функции-конструктора добавить метод getAccountInfo(),
//  который выводит в консоль значения полей login, email и friendsCount.
//  Обратите внимание, метод будет всего один, в поле prototype функции-конструктора,
//  а использовать его смогут все экземпляры, по ссылке.
//  Создать несколько экземпляров с разными значениями свойств, вывести их в консоль.
// function Account(login,email, friendsCount) {
//   this.login = login;
//   this.email = email;
//   this.friendsCount = friendsCount;
// }
// Account.prototype.getAccountInfo = function(){
//   console.log(`${this.login} ${this.email} ${this.friendsCount}`);
// }
// let mango = new Account('Nick93','nick93@i.ua', 10);
// let pole = new Account('Dima87', 'dima87@i.ua', 15);
// mango.getAccountInfo();
// pole.getAccountInfo();
// Модуль 6 доп завдання 2//
// Напишите функцию-конструктор StringBuilder.
//  На вход она получает один параметр string - строку.
//  Добавьте следующие методы в prototype функции-конструктора.
//    - getValue() - выводит в консоль текущее значение поля value
//    - append(str) - получает парметр str - строку и добавляет
//      ее в конец значения поля value
//    - prepend(str) - получает парметр str - строку и добавляет
//      ее в начало значения поля value
//    - pad(str) - получает парметр str - строку и добавляет
//      ее в начало и в конец значения поля value
function StringBuilder(string = "") {
 this.value = string;
}
StringBuilder.prototype.getValue = function(){
  console.log(`${this.value}`);
}
StringBuilder.prototype.append = function(str){
  this.str = str;
  console.log(`${this.value} ${this.str}`);
}
StringBuilder.prototype.prepend = function(str){
  this.str = str;
  console.log(`${this.str} ${this.value}`);
}
StringBuilder.prototype.pad = function(str) {
  this.str = str;
  console.log(`${this.str} ${this.value} ${this.str}`);
}
let mango = new StringBuilder('Hello world!!!');
mango.getValue();
mango.append('Mango');
mango.prepend('POly');
mango.pad('Smile))')
// Задача 2 //
// let books = [];
// let order = [];
// Part 1
// Створити конструктор Book який створює обєкти такого типу {title: title, author:author, pages: pages, price: price, curentPage: 0};
// Помістити в прототип метод  buy(arr) який приймає аргументом масив order додає ціну книжки в нього.
// Помістити в прототип метод read(num) який приймає аргументом кількість сторінок що прочитано і змінює значення поля curentPage;
// Створити 3 обєкта книжки викликати для них методи buy() та read(num); 
// Порахувати загальну вартість замовлення з масива order.
// Вивести в консоль змінене значення поля curentPage після запуску методів read(num); 
// Всі куплені книги додати в масив books.
//  Part 2
// Створити ф-ю констпуктор E-Book який наслідує всі властивості консруктора Book і додає до обєкта книги додаткове поле fileSize де вказується розмір книги в кілобайтах.
// Додати в прототип E-Book метод download() який при виклику виводить в консоль напис 'Book {title} has been dowloaded, app was downloaded {fileSize} kb';
// Створити 2 книги конструктором E-Book і викликати для них метод buy(arr) щоб додати їх до масиву order.
// Викликати для них метод download()
// Part 3 
// Створити корструктор PapperBook який наслідує всі властивості консруктора Book і додає до обєкта книги додаткове поле cover.
// Додати в прототип PapperBook метод burn(arr) який приймає аргументом масив books з частини №1 при виклику виводить в консоль напис 'Book {title} has been burned' і видаляє з масива books ту книгу для якої викликаємо цей метод.
// Створити 3 книги конструктором PapperBook і викликати для них метод buy(arr) щоб додати їх до масиву order.
// Викликати для першої і другої книги методи burn(arr), щоб видатити їх з масива order