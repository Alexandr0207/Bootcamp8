import React from 'react';
import './Menu.css';  
import {NavLink} from 'react-router-dom';

const Menu = () => {
  // / - Це корневий сайт, буде вести на головну сторінку
  return (
    <div>
    <ul className="list">
      <li>
        <NavLink to='/'>Home</NavLink> 
      </li>
      <li>
        <NavLink to='/about'>About</NavLink> 
      </li>
      <li>
        <NavLink to='/contact'>Contact</NavLink> 
      </li>
    </ul>
    </div>
  );
};

export default Menu;