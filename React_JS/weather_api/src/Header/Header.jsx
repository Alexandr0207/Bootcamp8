import React from 'react';
import styles from './Header.css'
import igh from '../ss.png'
// import favorites from '../favourites.png'
// import moment from 'moment'
// import axios from 'axios'
import search from '../search.png';


const Header = ({temp, pressure, humidity, temp_min, temp_max, query, changedInput, fetchData, date, location, city}) => {
  // console.log(date)
  return (
      <header>
        <p className={styles.author}>Made a Zhuk</p>
        <div className={styles.header}>
        <form className={styles.form} onSubmit={fetchData}>
        <input className={styles.inp} onChange={changedInput} placeholder="Введите город" name="name" type="text" id=""/>
        <img className={styles.search} src={search} onClick={fetchData} alt="search"/>
        </form>
        <div className={styles.time}>{date}
        <p className={styles.city}>{location},{city}</p>
        <img src={igh} className={styles.location} alt=""/>
        </div>
        </div>  
      </header>
  );
};

export default Header;