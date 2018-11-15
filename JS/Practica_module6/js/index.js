'use strict';

// Part 1
// Написати клас  Герой в якого будуть параметри (name, life, level, хр, stamina)
// name - імя
// life - житя =100
// level - рівень = 1
// хр - досвід = 0
// stamina - витривалість = 100
// Клас буде мати методи :
// 1) riseLevel - метод що збідьшує рівень героя на один, якщо хр = 1000
// 2) addXp - метод що приймає параметром хр і плюсує поки сума небуде 1000. Коли хр стає тисячу метод обнуляє поле до 0.
// 3) walk - метод що виводить в консоль фразу "name walking"
// 4) rest - метод що відновлює поле stamina до початкового значення і виводить в консоль фразу 'Recovered' 
// Створити героя і викликати для нього метод addXp(50) і addXp(950)
// Далі викликати метод riseLevel() що збільшить рівень до 2.
// викликати метод walk.

class walk {
  constructor(name, life = 100, level = 1, xp = 0, stamina = 100) {
    this.name = name;
    this.life = life;
    this.level = level;
    this.xp = xp;
    this.stamina = stamina;
  }
  riseLevel(){
    if(this.level === 1000){
    this.level += 1;
    return this.level;
    }
  }
  addXp(){

  }
  walk(){
    console.log('name walking');
  }
  rest(){
    this.stamina = stamina;
    console.log('Recovered');
  }
}

const people = new walk();
addXp (50);
addXp(950);
riseLevel();
walk();

console.log(people);

