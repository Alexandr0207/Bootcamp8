'use strict'

// // console.log(sublime);

// if(Array.isArray(sublime)){ // Перевірка на масів
//   console.log(2)
// } else{
//   console.log(3)  
// }

/////////////////////////

// console.log(sublime.resort);
                   
// const numbers = [1,2,3];

// numbers.forEach(el => console.log('forEach', el))

// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(numbers[i]);
// }

// numbers[0] = 254; // заміна
// console.log(numbers);

// let sanya = ['artem', 'luda', 'css']
// sanya.push('vanya', 'kirill')
// // sanya.push();
// console.log(sanya);


// let str = ['sanya', 'mirowa', 'zhuk', 'fff',];

// console.log(str.lastIndexOf('sanya'));

// let num = [5,510,20,30];
// console.log(num.filter(el => el > 510));


// if (2*4 == '8'){
//   console.log('маладец');
// } else{
//   console.log('лох');
// }



// let obj = { 
// name: { value: 'Sacha', info: 'df'},
// age: { value: 32, info: '2323'},
// mail: { value: '23@23.com', info: '2333'}
// }


// let a = Object.entries(obj)

// let obj5 = a.reduce( (acc, item) => {
//     return {...acc, [item[0]]: item[1].value}
//     }, {})

// console.log('obj', obj);
// console.log('a', a);
// console.log('obj5', obj5);

// console.log('X'-'y'+'4');
// console.log('4');
// let str = "hello"
// console.log('str', str.length);

// var fn = function() {
//   if(true) {
//       var a = 5;
//   }
//   console.log(a);
// }
// fn();

// console.log('0', 0 === false);

// let ul = document.querySelector('#ul');

// console.log(ul); // к id

// let ul = document.getElementById('ul');

// console.log(ul);

// var str = '123';
// var result = +str;
// console.log(typeof(result),result);// number 123

// let a, b, c = [1, 2, 3, 4, 5]
// console.log(a, c) // undefined [1,2,3,4,5]

// let b = {
//   g: {
//   name: 'Hotel'
//   }
// }

// let c = b.every(el => el.name == "Hotel");
// console.log(c);

// let n = c.reduce((acc, el) => { return {...acc, [el[0]] : el[1].value}},{})
// console.log(n);
//

//
// let div = document.querySelector('#root');
// let ul = document.createElement('ul');
// // let li = document.createElement('li');
// div.append(ul);
// // ul.append(li);
// let li;
// for (li = 0; li<20; li++){
//   // console.log(li);
//   let lie = document.createElement('li');
//   ul.append(lie)
// }
  /// Создать li при помощи цикла в JS
          //
// let a = ['sanya', 'vanya', 'masha'];
// let b = a.fill('katya');
// console.log(b); // ['katya','katya', 'katya'];

////

// let a = ['sanya', 'vanya', 'masha', 'vanya',];

// let b = a.find(el => el === 'vanya');
// console.log(b);
// let c = b.split(); // делает из строки масив
// console.log(c);
// let e = c.join();
// console.log(e); // делает из масива строку
            //  .. 
// let a = ['sanya', 'vanya', 'masha', 'vanya',];

// let b = a.find(el => el === 'vanya');
// console.log(b); // find шукає тільки перше шо буде в условії, в форматі строки


// let a = ['sanya', 'vanya', 'masha', 'vanya',];
// let b = a.findIndex(el => el === 'masha'); // 0
// console.log(b);

// let a = ['sanya', 'vanya', 'masha', 'vanya',];
// let b = a.forEach(el => el === 'vanya' ? true : false);
// console.log(b);
                  /// for each 
// const items = ['item1', 'item2', 'item3'];
// const copy = [];

// items.forEach(function(item){
//   copy.push(item)
// });

// console.log(copy);

///////////////////////

// const items = ['item1', 'item2', 'item3'];
// let it = [...items];
// console.log(it); spread оператор

var keys = ['foo', 'bar', 'baz'];
var values = [11, 22, 33]

var result = {};
keys.forEach((key, i) => result[key] = values[i]);
console.log(result); 
