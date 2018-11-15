'use strict';

const galleryItems = [{
    preview: 'img/preview-1.jpg',
    fullview: 'img/fullview-1.jpg',
    alt: "alt text 1"
  },
  {
    preview: 'img/preview-2.jpg',
    fullview: 'img/fullview-2.jpg',
    alt: "alt text 2"
  },
  {
    preview: 'img/preview-3.jpg',
    fullview: 'img/fullview-3.jpg',
    alt: "alt text 3"
  },
  {
    preview: 'img/preview-4.jpg',
    fullview: 'img/fullview-4.jpg',
    alt: "alt text 4"
  },
  {
    preview: 'img/preview-5.jpg',
    fullview: 'img/fullview-5.jpg',
    alt: "alt text 5"
  },
  {
    preview: 'img/preview-6.jpg',
    fullview: 'img/fullview-6.jpg',
    alt: "alt text 6"
  },
  {
    preview: 'img/preview-7.jpg',
    fullview: 'img/fullview-7.jpg',
    alt: "alt text 7"
  },
  {
    preview: 'img/preview-8.jpg',
    fullview: 'img/fullview-8.jpg',
    alt: "alt text 8"
  },
  {
    preview: 'img/preview-9.jpg',
    fullview: 'img/fullview-9.jpg',
    alt: "alt text 9"
  },
  {
    preview: 'img/preview-10.jpg',
    fullview: 'img/fullview-10.jpg',
    alt: "alt text 10"
  },
  {
    preview: 'img/preview-11.jpg',
    fullview: 'img/fullview-11.jpg',
    alt: "alt text 11"
  },
  {
    preview: 'img/preview-12.jpg',
    fullview: 'img/fullview-12.jpg',
    alt: "alt text 12"
  },
];

let div = document.querySelector('#root');
div.classList.add('image-gallery', 'js-image-gallery');
let divv = document.createElement('div');
divv.classList.add('fullview');
div.append(divv);
let imgdiv = document.createElement('img');
imgdiv.classList.add('immg')
imgdiv.setAttribute('alt', '');
imgdiv.setAttribute('src', galleryItems[Math.floor(Math.random() * galleryItems.length)].fullview);
divv.append(imgdiv);

function get(){
imgdiv.setAttribute('src', event.target.dataset.fullview);
}

function gallery(galleryItems) {
  let ul = document.createElement('ul');
  ul.classList.add('preview');
  for (let el of galleryItems) {
    let li = document.createElement('li');
    let img = document.createElement('img');
    img.setAttribute('src', el.preview);
    img.setAttribute('data-fullview', el.fullview);
    img.setAttribute('alt', el.alt);
    li.append(img);
    ul.append(li);
  }
  div.append(ul);
  ul.addEventListener('click', get);
}

// function start(){
//   immg.setAttribute('src', '')
// }

gallery(galleryItems);
console.log(div);