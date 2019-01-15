import React from 'react';
import Loader from 'react-loader-spinner';
import styles from './FiveDay.css';
import moment from 'moment';

const WeatherForFiveDay = ({array,isLoading}) => {
  return (
    <div>
       {isLoading ? 
      <div className={styles.load}><Loader type="Bars" color="#fff" height={80} width={80}/><p className={styles.loading}>LOADING...</p></div> : 
    <div className={styles.five}>
     <div className={styles.divr}>
      {array.map(el =><div className={styles.den}>
        <h2 className={styles.yeardate}>{el.length === 0 ? null : moment.unix(el[0].dt).format('dddd')}</h2>
        <div className={styles.divd}>{el.map(obj => <div className={styles.fiveDayn}>
          <h3>{moment.unix(obj.dt).format('MMMM DD число HH:mm')}</h3>
          <div className={styles.icon}>
          <img className={styles.img} src={`http://openweathermap.org/img/w/${obj.weather[0].icon}.png`} alt="Weattherd"/>
          <p className={styles.desc}>{obj.weather[0].description}</p>
          </div>
          <p>Температура: {Math.round(obj.main.temp)}°</p>
          <p>Давление: {(obj.main.pressure / 1.33).toFixed(2)}мм</p>
          <p>Влажность: {obj.main.humidity}%</p>
          <p>Скорость ветра: {(obj.wind.speed).toFixed(1)}м/с</p>
          </div>)}
          </div>
          </div>)}</div>
    </div>}
    </div>
  );
};

export default WeatherForFiveDay;