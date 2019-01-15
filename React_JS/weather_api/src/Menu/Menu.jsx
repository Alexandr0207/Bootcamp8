import React from 'react';
import styles from './Menu.css';  
import {NavLink} from 'react-router-dom';

const Menu = () => {
  return (
    <div className={styles.lise}>
      <ul className={styles.list}>
      <li className={styles.knopk}>
        <NavLink className={styles.a} to='/'>1 день</NavLink> 
      </li>
      <li className={styles.knopka}>
        <NavLink className={styles.a} to='/fiveDay'>5 дней</NavLink> 
      </li>
      <li className={styles.knopkk}>
        <NavLink className={styles.a} to='/fiveDay/chart'>График</NavLink> 
      </li>
    </ul>
    </div>
  );
};

export default Menu;