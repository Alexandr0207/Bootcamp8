import React from 'react';
import styles from './Button.css';

const Button = ({text}) => {
  return (
    <button className={`${styles.button} ${styles.text}`}><span className={styles.text}>{text}</span></button>
  );
};

export default Button;