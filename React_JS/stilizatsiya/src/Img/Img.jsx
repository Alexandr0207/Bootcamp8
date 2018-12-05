import React from 'react';
// import './Img.css'
import simg from './Img.css'

const Img = ({image}) => {
  return (
    <div>
      <img className={simg.img} src={image} alt=""/>
    </div>
  );
};

export default Img;