import React from 'react';
import style from './Card.css'
import Img from '../Img/Img';
import Adress from '../Adress/Adress';
import Price from '../Price/Price';
import Area from '../Area/Area';


const Card = ({image, full_address, area, price}) => {
  return (
    <div>
      <div className={style.card}>
        <Img image={image} />
        <Adress full_address={full_address}/>
        <Area area={area}/>
        <Price price={price}/>
      </div>
    </div>
  );
};

export default Card;