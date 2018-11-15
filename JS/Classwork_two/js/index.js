'use strict'

// [] - пустий масів

// let arr = [52, 23, 12, 10];
// let arr2 = new Array(2, 5 , 10);
// console.log(arr.length); Показує колічество елементів

// let firstArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(firstArray)
// console.log(firstArray[5])  //-знайти порядковий номер массиву 
// console.log(firstArray[3]) //-знайти порядковий номер массиву 

// let arr = [1,2,3,4,[1,2,5,9,12,15,[23,24,124,2,[34.3,5,98,['Error']]]]];
// console.log(arr[2]);

// let firstArray = [1,2,3];
// console.log(firstArray[0]);
// firstArray[0] = 100; // заміна
// console.log(firstArray);
// console.log(firstArray[25])

// let firstArray = ['Іван', 'Вася', 'Сергій']; // Додає людей в журнал
// firstArray.push('Петро' , 'Іраклій'); // Додає людей в список
// firstArray.push();
// console.log(firstArray);

// //pop
// let class1 = ['Іван', 'Вася', 'Сергій'];
// let class2 = ['Персей', 'Дарій', 'Наполеон'];
// class1.push('Петро', 'Іраклій');
// let user = class1.pop();
// console.log(user);
// console.log(class1);

//shift
// let firstArray = [1, 2, 3, 4];
// console.log(firstArray.shift());
// console.log(firstArray);  // Удаляє першу цифру

//unshift
// let firstArray = [1, 2, 3, 4];
// firstArray.unshift(27,33);
// console.log(firstArray); // Добавляє цифру // (5) [27,33,1,2,3,4];

// let firstArray = [5,8,13,14,25,26,98,75];
// let lengthArr = firstArray.length;
// console.log(firstArray[lengthArr = 5])// Виб'є останню цифру массіва, // 75

// let firstArray = ['abc', 'h', 'b', 'd','f','h','j'];
// console.log(firstArray.indexOf('b')); // Для того щоб знайти поярдковий номер // 2
// console.log(firstArray.indexOf('a')); // Якщо показує -1 , то такого елемента не існує в массиві // -1
// console.log(firstArray.indexOf('h'));
// console.log(firstArray.indexOf("q"));
// console.log(firstArray.indexOf('y'));

// includes 

// let firstArray = [11, 112, 23, 45];
// console.log(firstArray.includes(23)); // Перевіряє чи є в массіві такі числа, в цьому буде true , бо 23 в массиві є // true
// console.log(firstArray.includes(150)); // в цьому буде false , тому що 150 нема в массиві // false


// 1) Запитати логін через prompt
// 2) Перевірити чи існує логін в масиві logins
// 3) Якщо логін існує вивести алерт ("Такий логін вже існує")
// 4) Якщо логін не існує вивести алерт ("Вітаємо") 
// let logins = ['rew', 'qwewwe', 'apple', 'js', 'row', 'col']
// let value = prompt('Введіть Логін');{
//   if(logins.includes(value));
//   alert('Welcome');
//  }


// let firstArray = [10, 8, 7, 5];
// let secondArr = [12, 13, 16, 19, 87];
// let newArray = ['add me', 'join us'];
// let result = firstArray.concat(secondArr,newArray); // Об'єднання массивів;
// console.log(result);
// // console.log(firstArray);
// // // console.log(newArray);


// slice and splice
// slice start index and end index do not includes
// splice start index and how many

// let arr = [5, 10, 12, 15, 25];
// let newArr = arr.slice(); // зробити копію arr
// let arr3 = arr.slice(3);

// console.log(arr);
// console.log(newArr); // вирізає 1 і до останнього значення, бо 0, 2

// let arr = [1, 5, 9, 8, 7, 10];
// console.log(arr);
// let x = arr.slice();
// x.splice(2, 1); // пысля двойки пишем скільки цифр хочемо удалити
// console.log(x);
// //paste withoud delete
// x.splice(2, 0, 999, 150, 248); // Добавляти числа в масив через splice
// console.log(x)
// //paste with delete
// x.splice(2, 2, 13);
// console.log(x)
// // paste
// let a = arr.splice(4, 1, 'b','c','f');
// arr.splice(1, 0, 'javascript');
// console.log(arr);
// // replace
// arr.splice(5, 1, 'abc');
// console.log(arr);
// arr.splice(1, 4, 'java', 'script');
// console.log(arr);

// let arr = [1, 5, 9, 8, 7, 10];                      ///////Зробити обратний массив, щоб стало [10,7,8,9,5,1]
// // let newArr = arr.reverse();
// let newArr = arr.slice().reverse();                      ///////Зробити обратний массив, щоб стало [10,7,8,9,5,1]
// console.log(arr);                      ///////Зробити обратний массив, щоб стало [10,7,8,9,5,1]
// console.log(newArr);                      ///////Зробити обратний массив, щоб стало [10,7,8,9,5,1]



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 1) Записуємо в змінну строку з промта
// 2) Зробити строку масивом
// 3) Скопіювати масив
// 4) Реверсимо масив
// 5) З масивів робимо строки
// 6) порівнюємо дві строки і виводимо результат в консоль

///////

// let animals = ["cat","dog","rabbit","bird","fish"];

// // 1. Необходимо выбрать случайное значение. от нуля до длины массива.
// // 2. Записать в переменную обращение массив [индекс]
// // 3. вывести аллертом.


// let rand = Math.floor(Math.random()*animals.length);
// alert (animals[rand]);


///////////////////////

// 1) Через prompt вводимо свій варіант тваринки
// 2) Варіант компьютера записати в змінну
// 3) Порівнюємо наш варіант з компютерним
// 3,1) Якщо варіанти співпали тоді виводимо алертом що юзер виграва.
// 3<2) Якщо варіанти не співпали

// let animals = ["cat","dog","rabbit","bird","fish"];
// let animal = prompt('Введіть назву тваринки')
// let random = Math.floor(Math.random()*animals.length)
// let result = animals [random];
// console.log(result);
// if(result === animal){
//   alert('Ти виграв!');
// } else{
//   alert('Ти програв!')
// }

// /*
//   Есть массив имен пользователей.
//   В первом console.log вывести длину массива.

//   В последующих console.log дополнить конструкцию
//   так, чтобы в консоль вывелись указаные в комментариях 
//   элементы массива.
// */

// const users = ['Mango', 'Poly', 'Ajax', 'Chelsey'];

// console.log(users.length); // 4

// console.log(users[0]); // Poly
// console.log(users[1]); // Chelsey
// console.log(users[2]); // Mango
// console.log(users[3]); // Ajax
////////////////////////////////////////////////////////////////////////////


/* Есть массив имен пользователей */

// const users = ["Mango", "Poly", "Ajax", "Chelsey"];

/* Используя методы массива, последовательно выполнить следующие операции */

// Удалить из начала массива нулевой элемент
// console.log(users.shift()); // ["Poly", "Ajax", "Chelsey"]
// console.log(users);

// Удалить из конца массив последний элемент
// console.log(users.slice(1,3)); // ["Poly", "Ajax"]

// // // Добавить в начало массива любое имя
// users.unshift('Sanya')
// console.log(users.slice(4)); // ["добавленое имя", "Poly", "Ajax"]
// users.splice(0.2)

// // Добавить в конец массива два любых имени за одну операцию
// console.log(users); //  ["добавленое ранее имя", "Poly", "Ajax", "имя 1", "имя 2"]

// Написати гру Камінь Ножиці Папір.
// Варіанти вибору потрібно зберігати в масиві
// Користувач вводить свій варіант
// Компютер вибирає свій рандомний варівант з масиву
// Первіряємо вибір користувача і вибір компютера. 
// Опрацювати всі варіанти:
// 1) Варіанти де виграє користувач
// 2) Варіанти де виграє компютер
// 3) Варіанти де виходить нічия.

// let game = ['Камінь', 'Ножиці', 'Бумага'];
// let user = prompt('Камінь? Ножиці? Бумага?');
// let random = Math.floor(Math.random()*game.length);
// let result = game [random];
// console.log(result);
// switch (true){
//   case (user === 'Камінь' && result === 'Бумага'):
//   alert('Comp Win');
//   break;
//   case (user === 'Бумага' && result === 'Камінь'):
//   alert('Comp lose');
//   break;
//   case (user === 'Камінь' && result === 'Ножиці'):
//   alert('Comp lose');
//   break;
//   case (user === 'Ножиці' && result === 'Камінь'):
//   alert('Comp win');
//   break;
//   case (user === 'Ножиці' && result === 'Бумага'):
//   alert('Comp lose');
//   break;
//   case (user === 'Бумага' && result === 'Ножиці'):
//   alert('Comp win');
//   break;
//   case( user === result):
//   alert('Ничья!')
// }

/*
  Напишите скрипт, для авторизации администратора в панели управления.
  
  При загрузке страницы у посетителя запрашивается логин через prompt:
  
    - Если посетитель нажал Cancel — показывать alert с текстом 'Отменено пользователем!'
    - Если было введено что либо другое, что не совпадает со значением константы adminLogin, 
       показывать alert с текстом 'Доступ запрещен!'   
    - Если был введен логин совпадающий со значением константы adminLogin, спрашивать пароль через prompt.
    
  При вводе пароля:
  
      - Если нажали Cancel, показывать alert с текстом 'Отменено пользователем!'
      - Если введен пароль который не совпадает со значением константы adminPassword,
        показывать alert с текстом 'Доступ запрещен!'        
      - Если введён пароль который совпадает со значением константы adminPassword, 
        показывать alert с текстом 'Добро пожаловать!'
        
   PS: для удобства и чистоты кода сохраните в переменные сообщения отображаемые в alert
*/

// const adminLogin = 'admin';
// const user = prompt('Введите ваш логин');
// const adminPassword = 'm4ngo1zh4ackz0r';

// if (adminLogin === user) {
//   let password = prompt('Введите ваш пароль')
//   if (password === adminPassword) {
//     alert('Добро пожаловать!')
//   } else if (password === null) {
//     alert('Отменено пользователем!')
//   } else {
//     alert('Доступ запрещен!');
//   }
// } else if (user === null) {
//   alert('Отменено пользователем!')
// } else {
//   alert('Доступ запрещен!')
// }



/////////////////////////////////
// let Number = ('25px');
console.Number('25px');
