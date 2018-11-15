'use strict'

/////////////////   ЦИКЛЫ   ////////////////////

// while + // 
// do while + //
// for + // Частіше іспользуєм 
// for of // Частіше іспользуєм 
// break // 
// continue //

// let number = 0 // Відповідає за те скільки раз цикл зробив
// let arr = [];
// ////// Поки номер меньше 3 виводь в консоль цей номер і потім збільшуй на 1 
// // console.log(number <3 );
// while (number < 4) {
//   let userNumber = prompt ('Enter number');
//   arr.push(userNumber);
//   number+=1;
// }
// console.log(arr);

// let number = 0;
// let arr = [];
// while (number < 4) {
//     let userNumber = prompt('Enter number');
//     if(userNumber !== null && userNumber !== '') {
//       if(Number(userNumber) === 9);
//       alert('Це погане число');
//       number+=1;
//       continue;
//     } else {
//       arr.push(Number(userNumber));
//       number+=1;
    
//     } else{
//       break;
//     }
// }
// console.log(arr);


///////////////// do while;

// let number = 1;
// // do{
// //   console.log(number);
// //   number++
// // }
// while( number < 5);{
//  console.log(number);
//  number++;
// }




// let arr = []; 
// for(let i = 0; i < 10; i+=1){
//   let number = prompt('Enter number');
//   arr.push(number); // number ставимо в масив
// }
// console.log(arr);


// let arr = [5, 10, 25, 68, 78, 95];
// for(let i = 0, max = arr.length; i < max; i+=1){
//   console.log(arr [i]);  // Щоб вивести весь масів в стопчик  
// }

// //
// 5
// 10
// 20
// 68
// 78
// 95

// let arr = [5, 10, 25, 68, 78, 95];
// for(let i = 0, max = arr.length; i < max; i+=1){
//   console.log(arr [i]* arr [i]); // Щоб всі числа помножити в квадраті 
// }

// let arr = [5, 10, 25, 68, 78, 95];
// let arrTenPrc = [];
// for(let i = 0, max = arr.length; i < max; i+=1){
//   console.log((arr [i]*1.1).toFixed (2));  // Щоб помножити кожне число з масіву на 1.1  
// }

// .toFixed(2) ; Округляє число до двох знаків після коми, бо в дужках стоїть число 2 , якщо буде 3, то буде 3 знаки після коми округляти.

// for(let element of arr){
//   arrTenPrc.push((element*1.1).toFixed (2));
// }
// console.log(arrTenPrc);