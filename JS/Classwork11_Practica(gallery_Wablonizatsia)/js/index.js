'use strict';


const gallery = {
  title: 'Gallery',
  items: [
      {img: 'https://placeimg.com/300/150/animals', text: 'animals'},
      {img: 'https://placeimg.com/300/150/arch', text: 'architecture'},
      {img: 'https://placeimg.com/300/150/nature', text: 'nature'},
      {img: 'https://placeimg.com/300/150/people', text: 'people'},
      {img: 'https://placeimg.com/300/150/tech', text: 'tech'},
      {img: 'https://placeimg.com/300/150/any', text: 'random'}
  ]
};

let source = document.querySelector('#built-in-helpers-template').innerHTML.trim();
let tmp = Handlebars.compile(source);
let mark = tmp(gallery);
let container = document.querySelector('.gallery-content');
container.innerHTML = mark;