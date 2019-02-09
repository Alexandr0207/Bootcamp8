import React from 'react';
import './Home.css';
import name from './name.svg'
import email from './black-envelope.svg'
import phone from './phone.svg'
import location from './location.svg'
import skype from './skype.svg'

const Home = () => {
  return (
    <div className="page">
      <div className="about_container">
        <h2 className="title">About</h2>
        <h3 className="name-title">Alexandr Zhuk</h3>
        <p className="front-end">JUNIOR FRONT-END DEVELOPER (REACT.JS)</p>
        <p className="front-info">Hello! I'm Alexandr Zhuk Junior Front-End Developer. I like to do web development, as well as develop new projects in a team. I plan to develop in this industry and improve my qualifications.</p>
        <div className="perevorot">
        <div className="contact_container">
        <h3 className="contacts">Contacts</h3>
        <ul className="contact_con">
          <li className="li-info"><img className="svg-size" src={name} alt="name"/><span className="texdr"> Name: Alexandr Zhuk</span></li>
          <li className="li-info"><img className="svg-size" src={email} alt="email"/><span className="texdr"> E-mail: sasha20013zhuk@gmail.com</span></li>
          <li className="li-info"><img className="svg-size" src={phone} alt="phone"/><span className="texdr">Phone: +(380)-97-922-29-30</span></li>
          <li className="li-info"><img className="svg-size" src={location} alt="location"/><span className="texdr">Adress: Kiev, Ukraine</span></li>
          <li className="li-info"><img className="svg-size" src={skype} alt="skype"/><span className="texdr">Skype: sanek10582</span></li>
        </ul>
        </div>
        <div className="techd">
        <h3 className="title_skills">Technical skills</h3>
        <div>
          <h4 className="html">HTML5</h4>
          <div className="ruler"><div className="meter"></div></div>
        </div>
        <div>
          <h4 className="html">CSS3</h4>
          <div className="ruler"><div className="meter"></div></div>
        </div>
        <div>
          <h4 className="html">JavaScript</h4>
          <div className="ruler"><div className="meter meter_js"></div></div>
        </div>
        <div>
          <h4 className="html">React</h4>
          <div className="ruler"><div className="meter meter_react"></div></div>
        </div>
        <div>
          <h4 className="html">Redux</h4>
          <div className="ruler"><div className="meter meter_redux"></div></div>
        </div>
        <div>
          <h4 className="html">Trello</h4>
          <div className="ruler"><div className="meter meter_trello"></div></div>
        </div>
        <div>
          <h4 className="html">GitHub</h4>
          <div className="ruler"><div className="meter meter_github"></div></div>
        </div>
        <div>
          <h4 className="html">SASS</h4>
          <div className="ruler"><div className="meter meter_sass"></div></div>
        </div>
        </div>
        </div>
        <div className="down"><a className="download" href="https://drive.google.com/file/d/1iB3bO2xdZZCfsyBWazVIH-efN90Q_sAO/view?usp=sharing" target="_blank" rel="noreferrer noopener">DOWNLOAD CV</a></div>
      </div>
    </div>
  );
};

export default Home;