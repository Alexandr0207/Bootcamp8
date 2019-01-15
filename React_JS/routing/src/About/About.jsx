import React from 'react';

const About = ({aboutext}) => {
  return (
    <div>
      <h2>Tesla Model</h2>
      <p>{aboutext}</p>
      <img src="http://www.fainaidea.com/wp-content/uploads/2018/10/homepage-modelx.jpg" width="1280" height="1000" alt="ttsl"/>
    </div>
  );
};

export default About;