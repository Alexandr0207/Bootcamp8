'use strict'

// function // - Функція
// Якщо дужки пусті, то ззовні функція нічого не приймає


// function addTwoNumbers () {
//    console.log(5 + 6);
// }
//  Додавання 
// addTwoNumbers();

// const addTwoNumbers = function () {
//   console.log(5 + 6);
// }
// // У змінну AddTwoNumbers запиши код функції
// addTwoNumbers ();



///////////////////////////......

// function addTwoNumbers (){
//   let result = 5 + 6;
//   return result; // Поверни мені result
// }
// console.log(addTwoNumbers()); - вивести в лог
// alert (addTwoNumbers()); -вивести в алерт

/////////////////////////////////////////

// Функція параметри

// a,b - Параметри, ячейка для зберігання функцій

// function addTwoNumbers(a, b){
//   let result = a + b;
//   return result;
// }

/////??????????????????////////////////////////

// const century = function(year){
//    return Math.ceil(year / 100);
// }

// console.log(century(1500));
// console.log(century(2040));
// console.log(century(600));

// Задача коли вводиш число і показує століття

// .anchor.......................................function


/////////////////////////////////////////////////////////////

// function add() {
//   // console.log(arguments);
//   let arr = Array.from(arguments); // Зроби мені массів з аргументів
//   console.log(arr);
//   let total = 0; // Щоб знайти сумму всіх масивів
//   for (let el of arr) { // Щоб знайти сумму всіх масивів
//     total += el; // Щоб знайти сумму всіх масивів
//   }
//   return total;
// }
// console.log(add(5, 10, 30)); // Сумма масивів!
// // add(5, 10, 20); ///   - Віртуальний массив, аргумент

///////////////////////////////////////////////////////////////////////

// function connect(par1 = 3, par2 = 5, par3 = 100) {
//   return par1 + par2 + par3;
// }

// console.log(connect(5, 6)); // - Тут є 2 числа, значіть par1+par2, третього нема, то візьме par 3, par 3 = 100 // 5+6+par3// 5+6+100= 111 // 111
// console.log(connect(1, null, 3)); //- Тут 1 + null- це нічого, не візьме нічого, 1+3 = 4 // 4
// console.log(connect()); // - Щоб додати всі числа, par1+par2+par3// 3+5+100=108// 108
// console.log(connect(5)); // - Тут є 1 число, воно замінює par 1, потім до par 1 додається par 2 i par 3 // 5+par2+par3// 5+5+100= 110 // 110


////
// Використовується тоді, наприклад коли зареєструвався пользоватєль, і при реєєстрації не пише свій номер тел, тоді можна цим методом поставити заміну, наприклад замість його номера телефону буде 000000000- тіпа заглушка
///

// Область бачення

// let a = 10;
// let b = 20;


// function showNumber() {
//   let a = 50;
//   console.log(a);
//   console.log(b);

//   function secondlog() {
//     let a = 30;
//     let b = 120;
//     console.log(a);
//     console.log(b);
//   }
//   secondlog();
// }

// showNumber();


// //////////////////////////////////////////////////////////

/*
  Напишите функцию checkNumberType(num)
  
  Функция получает число num как аргумент и возвращает 
  строку "Even" если число четное и строку "Odd" если не четное.
*/

// Вызовы функции для проверки

// const checkNumberType = function(num) {
//   if (num % 2 === 0) {
//   return 'Even';
//   } else{
//   return 'Odd'};
// }

// console.log( checkNumberType(2) ); // 'Even'

// console.log( checkNumberType(46) ); // 'Even'

// console.log( checkNumberType(3) ); // 'Odd'

// console.log( checkNumberType(17) ); // 'Odd'


//////////////////////////////////////////////////

/*
  Напишите функцию formatString(str)
  
  - Функия принимает на вход строку str
  - Если длина строки не превышает 40 символов, функция возвращает ее. 
  - Если длина больше 40 символов, то функция обрезает строку до 40-ти
    символов и добавляет в конец строки троеточие '...', после чего 
    возвращает укороченную версию.
*/


// function formatString(str) { // -- Создаєм функцію formatString в якій є перемінна (str);
//   if (str.length >= 40) { // Якщо длінна строки більша за 40, то
//     let total = str.slice(0, 40) + '...'; // відріж від дліни 0 до дліни 40 і добав 3 крапки і 
//     return total; // потім верни мені в консоль це все
//   } else { // Якщо меньше 40, то поверни мені оригінальну строку
//     return str; 
//   }
// }
// function formatString(str){
//   if(str.length >= 40){
//     let total = str.slice(0,40) + '...';
//     return total;
//   } else{
//     return str;
//   }
// // }
// // Вызовы функции для проверки
// console.log(
//   formatString("Curabitur ligula sapien, tincidunt non.")
// ); // вернется оригинальная строка

// console.log(
//   formatString("Vestibulum facilisis, purus nec pulvinar iaculis.")
// ); // вернется форматированная строка

// console.log(
//   formatString("Curabitur ligula sapien.")
// ); // вернется оригинальная строка

// console.log(
//   formatString("Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."));
// // ); // вернется форматированная

//////////////////////////////////////////////////////
// const userInput = prompt('Введите продукты через запятую');

// if (userInput !== null) {
//   const products = userInput.split(',');
//   console.log(products);
// }
///////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
// const guests = ['Mango', 'Poly', 'Ajax', 'Singu', 'Chelsey'];

// const userInput = prompt(`Кого вырезаем? ${guests.join(' или ')}`);
// console.log(userInput);

// const idx = guests.indexOf(userInput);
// const elements = guests.splice(idx, 1);


// console.log('elements: ', elements);
// console.log('guests: ', guests);
///////////////////////////////////////////

///


/*
  Напишите функцию checkNumberType(num)
  
  Функция получает число num как аргумент и возвращает 
  строку "Even" если число четное и строку "Odd" если не четное.
*/

// function checkNumberType(num){
//   if(num % 2 === 0){
//     return num = 'Even';
//   } else{
//     return num = 'Odd';
//   }
// }

// // Вызовы функции для проверки
// console.log( checkNumberType(2) ); // 'Even'

// console.log( checkNumberType(46) ); // 'Even'

// console.log( checkNumberType(3) ); // 'Odd'

// console.log( checkNumberType(17) ); // 'Odd'
/////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////////////////////////////
// function checkNumberType(num = prompt('Введите число')){
//   if(num % 2 === 0){
//     return alert('Четное');
//   } else{
//     return alert('Нечетное');
//   }
// } 
// checkNumberType();

//////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////

/*
  Напишите функцию checkForSpam(str)
  
  Функция принимает 1 параметр str - строку,
  и проверять ее на содержание слов: spam и sale
  
  Если нашли зарещенное слово то функция возвращает true,
  если запрещенных слов нет функция возвращает false
  
  PS: слова могут быть в произвольном регистре
*/
// function checkForSpam(str){ 
//   if(str.includes('spam') || str.includes('sale')){ // Якщо в строці є слово spam або слово sale, то видай мені true, якщо нема , то видай false;
//   return true;
//   } else{
//     return false;
//   }
// }
// function checkForSpam(str) {
//   if (str.includes('spam') || str.includes('sale')) {
//     return true
//   } else {
//     return false
//   }
// }
// // // Вызовы функции для проверки
// console.log(checkForSpam('Latest technology news')); // false

// console.log(checkForSpam('JavaScript weekly newsletter')); // false

// console.log(checkForSpam('Get best sale offers now!')); // true


/////

//
/////////////////////////////
/*  
  Написать функцию, getPx(str) 

  Функция getPx должна получать строку вида '10px',
  проверять была ли передана строка, если да, 
  возвращать только числовую составляющую, к примеру 10.
    
  Если была передана не строка, функция возвращает null.
*/

// function getPx(str){
//   if(typeof str === 'string'){ // Якщо тип строки - є строка, то верни мені // parseFloat - робить із строки число!
//     return parseFloat(str); // число 
//   } else{ // Якщо тип строки є число, то верни мені null
//     return null; // null
//   }
// }

// // Вызовы функции для проверки
// console.log( getPx("10px") === 10 ); // должно быть:  true
// console.log( getPx("10.5") === 10.5 ); // должно быть:  true
// console.log( getPx("0") === 0 ); // должно быть:  true
// console.log( getPx(-1) ); // должно быть:  null
// console.log( getPx(10) ); // должно быть:  null


///////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////

/*  
  Создайте фукнцию findLongestWord(str),
  которая получает аргументом произвольную строку и
  возвращает самое длинное слово в этой строке.   
  
  Важное условие - в строке могут быть только пробелы
  и символы букв и цифр!
*/

// function findLongestWord(str){
//   if()
// }
// // Вызовы функции для проверки
// console.log(
//   findLongestWord("The quick brown fox jumped over the lazy dog")
// ); // вернет 'jumped'

// console.log(
//   findLongestWord("Google do a roll")
// ); // вернет 'Google'

// console.log(
//   findLongestWord("May the force be with you")
// ); // вернет 'force'

/*
  Напишите функцию checkNumberType(num)
  
  Функция получает число num как аргумент и возвращает 
  строку "Even" если число четное и строку "Odd" если не четное.
*/
// function checkNumberType(num = prompt('Введите число')){
//   if (num % 2 === 0){
//     alert('Опа! Четное!');
//   } else{
//     alert('Отдыхай! Нечетное!');
//   }
// }
// checkNumberType();
// // Вызовы функции для проверки

