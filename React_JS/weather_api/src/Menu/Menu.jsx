import React from 'react';
import styles from './Menu.css';  
import {NavLink} from 'react-router-dom';

const Menu = () => {
  return (
    <div className={styles.lise}>
      <ul className={styles.list}>
      <li>
        <NavLink className={styles.knopk}  to='/'>1 день <span className={styles.knopk}>| </span></NavLink> 
      </li>
      <li>
        <NavLink className={styles.knopk}  to='/fiveDay'>  5 дней</NavLink> 
      </li>
      <li>
        <NavLink className={styles.knopkk} to='/fiveDay/chart'><span className={styles.knopk}>|</span> График</NavLink> 
      </li>
    </ul>
    </div>
  );
};

export default Menu;