import React from 'react';
import style from './FavorList.css'
import remove from '../remove.png'

const FavorLis = ({favorList, clickFavoriteList, deletLi, favorListFunk}) => {
  return (
    <div className={style.favor}>
      <button className={style.bttn} onClick={favorListFunk}>Добавить в избранное</button>
      <ul className={style.list}>
        {favorList.map(el => 
        <li className={style.lilist} onClick={clickFavoriteList} id={el} key={el}>{el}
        <img className={style.span} src={remove} alt="remove" onClick={deletLi} data-id={el}/>
        </li>)}
      </ul>
    </div>
  );
};

export default FavorLis;