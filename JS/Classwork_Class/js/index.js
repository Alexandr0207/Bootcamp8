'use strict';

// Клас - ескіз (шаблон) обьєкта з яким маємо працювати (машина) Атрибути класа це колеса, двигун і т.д
// Методи - Завестися , відкрити двері, збільшити швидкість
// Обьєкт - екземпляр класа, який створили з шаблона
// Інтерфейс - набір методів доступних для використання іншими класами( приборна панель автомобіля, кнопки на автоматі з видачі вкусняшок)
// Абстракція - виділеня головних характеристик обьєкту і викидання незначних не вдаючись в роздуми як методи працюють зсередини. (map , filter , sort)
// Інкапсуляція - прихвання всіх внутрішніх процесів від користувача
// Наслідування - створення нового класу на базі існуючого
// Поліморфізм - використання обьєктів з однаковим інтерфейсом без інфи про внутрішню структуру

////////////////////////////////////////////////////////////////////////////////////
// ПРОТОТИП
///////////////////////////////////////////////////////////////////////////////////

// const Video = function
// ( size, duration, title, format, hd, author){
//     this.size = size;
//     this.duration = duration;
//     this.title = title;
//     this.format = format;
//     this.hd = hd;
//     this.author = author;
//   }

// Video.prototype.getFullInfo = function (){
//   return `${this.author} ${this.title} ${this.duration}`;
// }

// Video.prototype.archive = function (num){
//   this.size = parseFloat(this.size) / num + 'gb'
// }

// Video.prototype.changeAuthor = function (newAuthor){
//   this.author = newAuthor;
// }

// Video.prototype.changeTitle = function (newTitle){
//   this.title = newTitle;
// }

///////////////////////////////////////////////////////////////////////////
// Класи
///////////////////////////////////////////////////////////////////////////////


// class Video {
//   constructor(size, duration, title, format, hd, author, status){
//     this.size = size;
//     this.duration = duration;
//     this.title = title;
//     this.format = format;
//     this.hd = hd;
//     this.author = author;
//   }
//   static greet() {
//     console.log('Hello I am static method');
//   }
//   getFullInfo (){
//     return `${this.author} ${this.title} ${this.duration}`;
//   }

//   archive(num){
//     this.size = parseFloat(this.size) / num + 'gb'
//   }

//   changeAuthor(newAuthor){
//     this.author = newAuthor;
//   }

//   changeTitle(newTitle){
//     this.title = newTitle;
//   }
// }

// ////////////////////////////////////////////////////////////

//                     // Наслідування!

// ///////////////////////////////////////////////////////////////////////////

// class Stream extends Video{ // За допомогою класу стрім розширюємо класс Video
//   constructor(size, duration, title, format, hd, author, status){
//     super(size, duration, title, format, hd, author); // ПОки ми не напишемо super, this працювати не буде
//     this.status = status; // this активує super
//   }
//   changeStatus() {
//     this.status = !this.status;
//   }
//   getFullStreamInfo(){
//     // this.getFullInfo() + this.status;
//     super.getFullInfo() + this.status;
//   }
// }

// let movie = new Video('25gb','120min', 'Movie 43', 'MPG4', true, 'WB');
// console.log(movie.getFullInfo());
// console.log(movie);
// // movie.greet(); // Неправильний запис!
// Video.greet(); // Hello I am static method;

// // Video {size: "25gb", duration: "120min", title: "Movie 43", format: "MPG4", hd: true, …}
//     author: "WB"
//     duration: "120min"
//     format: "MPG4"
//     hd: true
//     size: "25gb"
//     title: "Movie 43"

// ////////////////////////////////////////////////////////////'

//



// class User {
//   constructor(name, surname) {
//     // this.name = name;
//     // this.surname = surname;
//     // private
//     this._name = name;
//     this._surname = surname;
//     this._age = age;
//   }
//   getFullName() {
//     return `${this.name} ${this.surname} ${this.age}.`
//   }

//   static methodSTATIC() {
//     console.log(`HELLO`);
//   }

//   //
//   // // getter
//   //
//   get name() { // Getter - не можна змінити
//     return this._name;
//   }
//   get age() {
//     return this._age;
// }

//   set age(num) {
//     this._age = num;
//   }

//   // get surname() {
//   //   return this._surname;
//   // }
//   //
//   // // // setter
//   // //

//   // get age() {
//   //   return this._age;
//   // }



//   //

// }

// let user = new User('Jon', 'Dou');
// console.log(user.getFullName());
// console.log(user);













///////////////////////////////////////////

//                     // Практична 3

// ///////////////////////////////////////////////////////////////////////////

/*
  Создайте класс Car с указанными полями и методами.
*/

class Car {
  constructor(speed = 0, maxSpeed, running = false, distance = 0) {
    this.speed = speed;
    this.maxSpeed = maxSpeed;
    this.running = running;
    this.distance = distance;
    /*
      Добавьте свойства:
        - speed - для отслеживания текущей скорости, изначально 0.
        
        - maxSpeed - для хранения максимальной скорости 
        
        - running - для отслеживания заведен ли автомобиль, 
          возможные значения true или false. Изначально false.
          
        - distance - содержит общий киллометраж, изначально с 0
    */
  }

  turnOn() {
    // Добавьте код для того чтобы завести автомобиль
    // Просто записывает в свойство running значание true
    this.running = true;
  }

  turnOff() {
    // Добавьте код для того чтобы заглушить автомобиль
    // Просто записывает в свойство running значание false
    this.running = false;
  }

  accelerate(spd) {
    // Записывает в поле speed полученное значение, при условии что
    // оно не больше чем значение свойства maxSpeed
    if (spd < this.maxSpeed) {
      this.speed = spd;
    }
  }

  decelerate(spd) {
    // Записывает в поле speed полученное значение, при условии что
    // оно не больше чем значение свойства maxSpeed и не меньше нуля
    if (0 < spd < this.maxSpeed) {
      this.speed = spd;
    }
  }

  drive(hours) {
    // Добавляет в поле distance киллометраж (hours умноженное на значение поля speed),
    // но только в том случае если машина заведена!
    if ((this.running = true)) {
      return (this.distance = hours * this.speed);
    }
  }
}

class someCar extends Car { // За допомогою класу стрім розширюємо класс Video
  constructor(speed = 0, maxSpeed, running = false, distance = 0) {
    // this.status = status; // this активує super
  }
}

let someCar = new Car();
someCar.turnOn();
someCar.drive(2);
Car.getSpecs(someCar);
const Peugeot = new Car(0, 110, true, 20);
Peugeot.turnOn(true);
Peugeot.turnOff(true);
Peugeot.accelerate(150);
Peugeot.decelerate(50);
Peugeot.drive(2);



console.log(Peugeot);
// console:
// Car {speed: 50, maxSpeed: 110, running: true, distance: 100}
// distance: 100
// maxSpeed: 110
// running: true
// speed: 50
// __proto__: Object

////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////