import React from 'react';
import styles from './Oneday.css'
import moment from'moment';

const OneDay = ({data,fetchData, temp, pressure, humidity, temp_min, temp_max, sunrise, sunset, wind}) => {
  return (
    <div className={styles.oneDay}>
      <div className={styles.info}>
      <img className={styles.img} src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`} alt="Weattherd"/>
      <div>
        <p>Температура: {temp.toFixed(0)}°</p>
        <p>Давление: {pressure}мм</p>
        <p>Влажность: {humidity}%</p>
        <p>min °C: {temp_min}°</p>
        <p>max °C: {temp_max}°</p>
        <p>Восход солнца: {moment.unix(sunrise).format("HH:mm")} по местному времени</p>
        <p>Заход солнца: {moment.unix(sunset).format("HH:mm")} по местному времени</p>
        <p>Ветер: {wind}м/с</p>
        </div>
        </div>
    </div>
  );
};

export default OneDay;