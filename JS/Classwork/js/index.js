'use strict'

// let str = 'Hello world'
// console.log(str.length); // Скільки всього букв //  11
// console.log(str.toLowerCase()); // Зробити нижній регістр букв // hello world
// console.log(str.toUpperCase()); // Зробити верхній регістр букв // HELLO WORLD
// console.log(str.includes('z')); // Пошук тексту в коді // false -якщо не знайшло // true - якщо знайшло
// console.log(str[6]); // Пошук по счету букви, буде // w 
// let str = 'The quick red fox jumped over the lazy dog\'s back.';
// console.log(str.slice(0,3)); // Вирізає символи від 0 до 3 // The


// Math 

// console.log(Math.floor(2.99)); // округляє по меньшому числу // 2 
// console.log(Math.ceil(2.000000001)); // Округляє по більшому // 3 
// console.log(Math.round(2.499999)); // Округляє як в школі, якщо більше 2.5, то буде 3 , якщо тут 2.4, то буде 2 // 2

// Для модуля

// console.log(Math.abs(10)); // Як модуль, буде 10, якщо поставити (-10), то так і буде 10 // 10;

//Для степеня

// console.log(Math.pow(9,2)); // Піднести до степеня, 9 буде множити на 2 = 81 // 81 

// console.log(Math.sqrt(10,1/3)); // Ділити на дробові і прості, щоб прості ділити (4);

// console.log(Math.max(-50,-40));
// console.log(Math.min(9/12,3/4));

// console.log(Math.floor (Math.random()*100)); // Шукати рандомне число; Math.floor - Округляє до меньшого числа;
// console.log(Math.floor (Math.random()*100)+1); // Якщо +1, то буде генеруватися число від 1 до 100 включно;

// /Math


// Пароль, пускання символів 

// let password = prompt ('Enter Password');
// console.log(password.length >= 4); //Треба ввести мінімум 4 символи, якщо буде меньше , викине false, якщо більше будет true;

// Порівнювати числа 

// let a = 5 ;
// let b = 5 ;
// console.log( a = b ); //Порівнюєм число, // 5 

// let a = 5 ;
// let b = 5 ;
// console.log( a === b ); // === - Краще для того, щоб не вибивало ошибки типів данних, завжди іспользувати 3 = // true, якщо буде друге число, буде false

// let a = 1; 
// let b = '1';
// console.log( a === b ); // false
// console.log( a == b ); // true


// false 

// console.log(Boolean(0));
// console.log(Boolean(''));
// console.log(Boolean(NaN)); // ДИЧЬ
// console.log(Boolean(undefined)); // ДИЧЬ
// console.log(Boolean(null)); // ДИЧЬ
// console.log(Boolean(-0)); // ДИЧЬ
// console.log(Boolean(false));

// /false 

// Порівняння з приставкою НЕ - ! 

// console.log ( a != b ); // ПРИСТАВКА НЕ - ! СТАВИМО ЗАМІСТЬ ОДНОГО =
// console.log ( a !==b ); // ПРИСТАВКА НЕ - ! СТАВИМО ЗАМІСТЬ ОДНОГО =

// console.log ( a == b );
// console.log ( a ===b );

//  /Порівняння з приставкою НЕ - ! 

// OПЕРАТОРИ!

// && and -  // ОПЕРАТОР ЯКИЙ ПЕРЕВІРЯЄ НА i ; Працює до першого FALSE
// || or - // АБО працює до першого TRUE

// БАЗОВІ СТРУКТУРИ:
// 1.  if , else, Цикл, функція, условія.

// let time = prompt ('Enter time');
// console.log(Number(time));
// console.log((time));
// if (Number(time)){
// if (time <=21) {
//   alert ('Включи футбол 1');
// } else{ 
//   alert ('Можеш йти спати');
// }
// }

// let month = prompt('Enter month');

// if (month === 'грудень' || month === 'січень' || month === 'лютий'){
//   alert('Winter');
// } else if (month === 'березень' || month === 'квітень' || month === 'травень'){
//   alert('Spring')
// } else if (month === 'червень' || month === 'липень' || month === 'серпень'){
//   alert('Summer')
// } else if (month === 'вересень' || month === 'жовтень' || month === 'листопад'){
//   alert('Autum')
// } else{
//   alert('Помилка вводу');
// }

// switch (month) {
//   case грудень: 
//   alert ('Winter');
//   break;
//   case січень: 
//   alert ('Winter');
//   break;
//   case лютий: 
//   alert ('Winter');
//   break;
//   case березень: 
//   case квітень: 
//   case травень: 
//   alert('Spring')
//   break;
//   case(month > 5)
//     alert ('test');
//   default:
//   alert('Помилка вводу');
//    break;
// }

// let age = prompt('Enter age');

// let result = age > 15? 'Студент' : 'Учень';

// if (age > 15){
//    result = 'Студент';
// } else {
//   result = 'Учень';
// }

// let age = prompt('Enter age');

// let result = age > 15? 'Студент' : age < 15 && age > 8 ? 'Учень' : 'Дитина';



// 1.zadanie

// let name = 'Mango';
// let guest = 'Mango';
// console.log(guest=name);

//  //

// 2.zadanie

/*
  Есть три переменные name, date и roomType, содержащие 
  имя гостя, дату его прибытия на отдых и тип комнаты отеля.
  
  Используя шаблонные строки необходимо записать 
  в перменную message сообщение формата:
  "имя гостя" прибывает на отдых "дата прибытия" в "тип комнаты".
  
  Найти ошибки в коде и исправить их, при верном решении 
  в консоль будет выведена строка идентичная той что 
  напротив console.log
*/

// const name = ('Mango');
// const date = '14/08/2031';
// const roomType = 'люкс';

// const message =`${name} прибывает на отдых ${date} в ${roomType}`;

// console.log(message); // Mango прибывает на отдых 14/08/2031 в люкс.

/////////////////////////////////////////////////////////////////////////////


/*
  Есть 3 переменные в которых хранится  размер составляющих 
  блочной модели в формате Npx, где N это целое число.
  
  Используя эти переменные, запишите в переменную totalWidth 
  общую ширину блока в формате Npx.
  
  К примеру "сумма" '20px' и '30px' будет равна '50px'.
  
  Если все верно, то в консоли будет выведена строка '125px'
*/

// const padding = "20px";
// const border = "5px";
// const contentWidth = "100px";

// let totalWidth = parseInt(padding) + parseInt(border) + parseInt(contentWidth) + "px";

// console.log(totalWidth); // '125px'

/////////////////////////////////////

/*
  Напишите скрипт который: 
  
  - Через prompt cпрашивает 'Какой сейчас год?'
  - Если посетитель вводит 2018 - показывать alert со строкой 'Все верно!'
  - Если что-то другое — показывать alert 'Но ведь на вдоре 2018!'
  
  PS: используйте конструкцию if..else.
// */ 


// let year = prompt ('Какой сейчас год?');
//   if(year === '2018'){
//   alert('Все верно!');
//   }  else{
//   alert('Но ведь на дворе 2018!');
// }

/////////////////////////////////////////////////////////////////////

/*
  Напишите скрипт который: 
 
  - Через prompt cпрашивает 'Введите произвольное целое число'
  - Если пользователь нажал Cancel - показывать alert 'Приходите еще!'
  - Если посетитель вводит целое число - показывать alert со строкой 'Спасибо!'
  - Если посетитель вводит что либо другое — показывать alert 'Необходимо было ввести целое число!'
  
  PS: используйте конструкцию if..else.
*/ 

// const title = prompt ('Введите произвольное целове число');
// if (title === null) {
//   alert ('Приходите еще!')
// } else if (Number.isInteger(Number(title))){
//   alert('Спасибо')
// } else{
//   alert('Необходимо было ввести целое число')
// }

///////////////////////////////////////////////////

/* 
  В переменную num записывается случайное число.
  
  Используя ветвления запишите в переменную type строку:  
    - "even" если num четное
    - "odd" если num не четное

  PS: попробуйте использовать тернарный оператор
*/

// const num = Number.parseInt(Math.random() * 100);

// let type;

// type = num % 2 === 0 ? 'even' : "odd"

// console.log(`${num} is ${type}`);

////////////////////////////////////////////////////////////////////////////////////////////

/* 
  Время состоит из: 
    часов(hours)
    минут (minutes)
    секунд(seconds).
  
  Время должно всегда выводиться в формате xx:xx:xx
  Например: 01:12:04 или 14:03:45
  
  Составляющие времени не гарантированно состоят из 2-х цифр!
  
  Напишите скрипт который проверяет каждую составляющую,
  тоесть значения переменных hours, minutes, seconds 
  и добавлят впереди 0 если необходимо.
*/

// let hours = 7;
// let minutes = 3;
// let seconds = 42;

// if(hours<10) {hours = '0' + hours;}
// if(minutes<10) {minutes = '0' + minutes;}
// if(seconds<10) {seconds = '0' + second;}

// const time = `${hours}:${minutes}:${seconds}`;

// console.log('Time is: ', time)

//////////////////////////////////////////////////////

let Number = ('25px');
console.log(Number)