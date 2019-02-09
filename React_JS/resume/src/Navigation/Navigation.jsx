import React from 'react';
import './Navigation.css';
import img from '../img/de.jpg';
import {NavLink} from 'react-router-dom';

const Navigation = () => {

  return (
    <div className="Navigation">
      <div className="info">
      <img className="photo" src={img} alt="sanya"/>
      </div>
      <ul className="btn">
      <li className="btn">
      <NavLink className="knopk" to='/'>About</NavLink>
      </li> 
      <li className="btn">
      <NavLink className="knopk" to='/skills'>Skills</NavLink>
      </li> 
      <li className="btn">
      <NavLink className="knopk" to='/projects'>Projects</NavLink>
      </li> 
      </ul>
      <ul className="findme">
        <li className="linkedin">
        <a href="https://www.linkedin.com/in/alexandr7777/" target="_blank"  rel="noreferrer noopener"><span className="linkedin_photo"></span></a>
      </li>
      <li className="linkedin">
        <a href="https://www.facebook.com/profile.php?id=100017493482689" target="_blank"  rel="noreferrer noopener"><span className="linkedin_photo_facebook"></span></a>
      </li>
      <li className="linkedin">
        <a href="https://github.com/Alexandr0207" target="_blank"  rel="noreferrer noopener"><span className="linkedin_photo_github"></span></a>
      </li>
      </ul>
    </div>
  );
};

export default Navigation;