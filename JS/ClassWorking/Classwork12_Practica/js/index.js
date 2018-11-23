'use strict';

// Пошта починатися з будь-якої кількості літер чи цифр
// Далі має йти @
// Потім літери чи цифри від 2 до 5 символів
// І закінчуватися на .com

const mail = document.querySelector('#mail');
const form = document.querySelector('form');
const mailCheck = /^\w{1,}@\w{2,5}\.com/;

function sss(){
  event.preventDefault();
  if(mailCheck.test(mail.value)){
    alert('mail is correct')
  } else{
    alert('mail is uncorrect')
  }
}

form.addEventListener('submit', sss);

