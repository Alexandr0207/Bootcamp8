import React from 'react';
import './Gallery.css'



const Gallery = () => {
  let imgArr = [{src:'http://bm.img.com.ua/nxs/img/prikol/images/large/1/2/308321_879389.jpg',id:1}, {src:'http://www.emprenemjunts.es/fotos/54100_foto.jpg',id:2}, {src:'https://pbs.twimg.com/profile_images/793021684064419840/RjEjM6z5_400x400.jpg',id:3}, {src:'http://anekdotsuper.ru/assets/img/vse-kartinki/zastavki-na-telefon/zastavka-android-1.jpg',id:4}, {src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtKfT6x17FrVQIEC-RSEhOdxbU2eDA9PPR2JSiM8KhDvbL7ICi',id:5}, {src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqcSRc6AOUMtQDmA50E6-rn6IHkBSuUQQZAg07raZZyhwQel50',id:6}];
  return (
    <div className="gallery">
       {imgArr.map(el => <img src={el.src} alt='gallery-item' key={el.id}/>)}
    </div>
  );
};

export default Gallery;