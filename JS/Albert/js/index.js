'use strict';

let sectionArr = [{
  classes: 'fa-mars',
  sectionYear: 1879,
  title: 'Albert Einstein born',
  text: 'Albert Einstein is born in Ulm, Germany, the son of Hermann Einstein, a German Jewish featherbed salesman, and his wife Pauline.',
},
{
  classes:'fa-magnet',
  sectionYear: 1884,
  title: 'Mystery of Magnetism',
  text: "At the age of five, Albert Einstein becomes fascinated by his father's pocket compass, intrigued by invisible forces that cause the needle always to point north. Later in life, Einstein will look back at this moment as the genesis of his interest in science.",
},
{
  classes: 'fa-plane',
  sectionYear: 1894,
  title: 'Move to Italy',
  text: 'Struggling financially, the Einstein family moves from Germany to Italy in search of better work. Albert, aged fifteen, stays behind in Munich to finish his schooling, but soon either quits or is kicked out of his high school and follows his parents to Italy.',
},
{
  classes: 'fa-ban',
  sectionYear: 1895,
  title: 'Boarding School in Aarau',
  text: 'Albert Einstein attempts to get out of his last year of high school by taking an entrance exam to ETH, the Swiss Polytechnic University in Zurich. He fails the test, forcing him to attend one final year of high school in the small town of Aarau, Switzerland, instead.',
},
{
  classes: 'fa-university',
  sectionYear: 1896,
  title: 'Einstein at ETH',
  text: 'Albert Einstein graduates from high school and begins attending ETH, the prestigious Swiss Polytechnic University in Zurich.',
},
{
  classes:'fa-graduation-cap',
  sectionYear: 1900,
  title: 'College Graduation',
  text: 'Albert Einstein graduates from ETH with a degree in physics. He tries to find a teaching job, but is unable to obtain work.',
},
{
  classes:'fa-briefcase',
  sectionYear: 1902,
  title: 'Swiss Patent Office',
  text: 'Unable to find any work as a teacher or academic, Albert Einstein takes a job as a clerk at the Swiss Patent Office.',
},
{
  classes:'fa-files-o',
  sectionYear: 1905,
  title: 'Annus Mirabilis',
  text: 'Over the course of a year that he will later describe as his "Annus Mirabilis" - his miraculous year - Albert Einstein publishes four major theoretical papers in the prestigious German academic journal Annalen Der Physik. The four papers include a groundbreaking new interpretation of the photoelectric effect as well as the first published exploration of the theory of Special Relativity and the first formulation of the famous equation E = mc2',
},
{
  classes:'fa-file-o',
  sectionYear: 1915,
  title: 'General Theory of Relativity',
  text: 'Einstein completes his General Theory of Relativity.',
},
{
  classes:'fa-thumbs-up',
  sectionYear: 1919,
  title: 'Eclipse Proves Theory of Relativity',
  text: "A solar eclipse provides dramatic observable evidence that Einstein's General Theory of Relativity is correct. Einstein suddenly becomes a worldwide celebrity.",
},
{
  classes:'fa-trophy',
  sectionYear: 1921,
  title: 'Nobel Prize',
  text: 'Albert Einstein wins the Nobel Prize in Physics for his work on the photoelectric effect, first published in 1905.',
},
{
  classes:'fa-envelope',
  sectionYear: 1939,
  title: 'Letter to President Roosevelt',
  text: "Fearing that Nazi scientists might win the race to develop the world's first atomic bombs, Albert Einstein writes a letter to President Franklin D. Roosevelt, urging him to launch an American program of nuclear research.",
},
{
  classes:'fa-death',
  sectionYear: 1955,
  title: 'Death of Albert Einstein',
  text: 'Albert Einstein dies of heart failure at the age of 76.',
}
]

// header
let root = document.querySelector('#root');
let header = document.createElement('header');
let h1 = document.createElement('h1');
h1.setAttribute('id', 'title'); // Вставляти атрибут в h1
h1.textContent = 'Albert Einstein'; // добавити текст
header.append(h1);




// main
let main = document.createElement('main');
main.setAttribute('id' , 'main');
let divq = document.createElement('div');
divq.setAttribute('id' , 'first-row');
main.append(divq);
let divw = document.createElement('div');
divw.setAttribute('id' , 'img-div');
divq.append(divw);
let figure = document.createElement('figure');
divw.append(figure);
let img = document.createElement ('img');
img.setAttribute('id', 'image'); // Вставляти атрибут в h1
img.setAttribute('src', 'http://jonivainio-kaila.fi/freecodecamp/tribute/assets/img/einstein-mobile.jpg'); // Вставляти атрибут в h1
img.setAttribute('alt', 'Profile picture of Albert Einstein.'); // Вставляти атрибут в h1
figure.append(img);
let figcaption = document.createElement ('figcaption');
figcaption.setAttribute('id', 'img-caption'); // Вставляти атрибут в h1
figcaption.textContent = 'Profile picture of Albert Einstein'; // добавити текст
figure.append(figcaption);

////////

let divinfo = document.createElement('div');
divinfo.setAttribute('id' , 'tribute-info');
divq.append(divinfo);
let p = document.createElement('p');
p.textContent = "was a German-born theoretical physicist. He developed the theory ofrelativity, one of the two pillars of modern physics. Einstein's work is also known for its influence on thephilosophy of science. Einstein isbest known in popular culture for his mass-energy equivalence formula. He received the 1921 Nobel Prize inPhysics for his services to theoretical physics, and especially for his discovery of the law of thephotoelectriceffect, a pivotal step in the evolution of quantum theory.";
divinfo.append(p);
let strong = document.createElement('strong');
strong.textContent = 'Albert Einstein';
p.prepend(strong);


/////
let divquote = document.createElement('div');
divquote.setAttribute('id', 'quote');
main.append(divquote);
let blockquote = document.createElement('blockquote');
blockquote.textContent = '"Anyone who has never made a mistake has never tried anything new"';
divquote.append(blockquote);


let div_timeline = document.createElement('div');
div_timeline.setAttribute ('id' , 'timeline');
main.append(div_timeline);
let h2 = document.createElement('h2');
h2.textContent = 'Timeline of Albert Einstein`s life';
div_timeline.append(h2);


for (let el of sectionArr){
  let section = document.createElement('section');
  div_timeline.append(section);
  let divfa = document.createElement ('div');
  divfa.classList.add('fa', el.classes); // Добавити класс
  section.append(divfa);
  let h3 = document.createElement ('h3');
  h3.textContent = el.title;
  section.append(h3);
  let divyear = document.createElement('div');
  divyear.classList.add('year'); // Добавити класс
  divyear.textContent = el.sectionYear;
  h3.prepend(divyear);
  let psection = document.createElement('p');
  psection.textContent = el.text; // Добавити класс
  section.append(psection);
}

let divlink = document.createElement('div');
divlink.setAttribute ('id','link');
main.append(divlink);
let atribute = document.createElement('a');
atribute.setAttribute('id','tribute-link');
atribute.setAttribute('href','http://www.shmoop.com/albert-einstein/timeline.html');
atribute.setAttribute('target', '_blank');
atribute.textContent = 'Full timeline at Shmoop!';
divlink.append(atribute);




///// footer

let footer = document.createElement('footer');
let divfooter = document.createElement('div');
divfooter.setAttribute('id', 'icons');
footer.append(divfooter);
let afooter = document.createElement('a');
afooter.setAttribute('href','https://www.linkedin.com/in/joni-vainio-kaila-924726143/');
afooter.setAttribute('target','_blank');
afooter.classList.add('fa','fa-linkedin'); // Добавити класс
divfooter.append(afooter);
let pfooter = document.createElement('p');
pfooter.setAttribute('id','copyright');
let onfooter = `Tribute page project for <i class="fa fa-free-code-camp"></i> by Joni Vainio-Kaila`;
pfooter.innerHTML = onfooter; // Удалить Заголовок і параграф, і вставе силку
footer.append(pfooter);

root.append(header),root.append(main),root.append(footer);

console.log(header),console.log(main),console.log(footer);


