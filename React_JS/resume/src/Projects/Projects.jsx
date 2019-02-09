import React from 'react';
import './Projects.css';
import fighting from './Fighting.png';
import weather from './weather.png';
import slack from './slack.png';
import albert from './albert.png';
import GoIT from './GoIT.png';

const Projects = () => {
  return (
    <div className="page">
    <div className="project_container">
      <h2 className="project_title">Projects</h2>
      <div className="portfolio_per">
      <div className="portfolio">
        <h3 className="title_fighting">Fighting</h3>
        <div className="screen">
        <img className="screen_img" src={fighting} alt="fighting"/>
        <p className="desc"><span className="desc_title">Desctiption:</span> Designed for martial arts lovers. Team project.</p>
        <p className="desc"><span className="desc_title">Using:</span> HTML, CSS , Gulp,JavaScript.</p>
        <p className="desc"><span className="desc_title">Demo:</span><a href="https://alexandr0207.github.io/JavaScript_GameProject/build/" target="_blank" className="click" rel="noreferrer noopener"> Click please.</a></p>
        </div>
      </div>
      <div className="portfolio">
        <h3 className="title_fighting">Weather</h3>
        <div className="screen">
        <img className="screen_img" src={weather} alt="weather"/>
        <p className="desc"><span className="desc_title">Desctiption:</span> Created to view weather with pictures of cities.</p>
        <p className="desc"><span className="desc_title">Using:</span> React.js, HTML, CSS, API.</p>
        <p className="desc"><span className="desc_title">Demo:</span><a href="https://alexandr0207.github.io/WeatherApp/" target="_blank" className="click" rel="noreferrer noopener"> Click please.</a></p>
        </div>
      </div>
      <div className="portfolio">
        <h3 className="title_fighting">Slack Clone(Chat)</h3>
        <div className="screen">
        <img className="screen_img" src={slack} alt="slack"/>
        <p className="desc"><span className="desc_title">Desctiption:</span> Designed for student communication. Team project.</p>
        <p className="desc"><span className="desc_title">Using:</span> React.js, Redux.js, HTML and Semantic
UI, Node.js(Google Firebase)</p>
        <p className="desc"><span className="desc_title">Demo:</span><a href="https://slackclone-9c023.firebaseapp.com/" target="_blank" className="click" rel="noreferrer noopener"> Click please.</a></p>
        </div>
      </div>
      <div className="portfolio">
        <h3 className="title_fighting">Albert</h3>
        <div className="screen">
        <img className="screen_img" src={albert} alt="albert"/>
        <p className="desc"><span className="desc_title">Desctiption:</span> Converting from HTML to React.</p>
        <p className="desc"><span className="desc_title">Using:</span> HTML, React.js, CSS</p>
        <p className="desc"><span className="desc_title">Demo:</span><a href="https://alexandr0207.github.io/Albert_react/" target="_blank" className="click" rel="noreferrer noopener"> Click please.</a></p>
        </div>
      </div>
      <div className="portfolio">
        <h3 className="title_fighting">GoIT Project</h3>
        <div className="screen">
        <img className="screen_img" src={GoIT} alt="GoIt"/>
        <p className="desc"><span className="desc_title">Desctiption:</span> Landing page. Made for GoIT.</p>
        <p className="desc"><span className="desc_title">Using:</span> HTML,
CSS, Gulp</p>
        <p className="desc"><span className="desc_title">Demo:</span><a href="https://alexandr0207.github.io/GoIT_Project/build/index.html" target="_blank" className="click" rel="noreferrer noopener"> Click please.</a></p>
        </div>
      </div>
      </div>
    </div>
    </div>
  );
};

export default Projects;