import React from 'react';
import './Card.css'

const Card = ({info}) => {

  
  return (
    <div className="card">
      <div className="carta">
        <h3>{info.title}</h3>
        <p>Опис фільму: {info.description}</p>
        <p>Рік випуску: {info.year}</p>
        <p>Бюджет: {info.budget}</p>
        <p>Актори: {info.actors.map(el => <span>{el}, </span>)}</p>
        <p>Жанр: {info.genres.map(el => <span>{el}, </span>)}</p>
      </div>
    </div>
  );
};

export default Card;