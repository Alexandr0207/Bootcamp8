import React from 'react';
import './Skills.css';
const Skills = () => {
  return (
    <div className="page">
      <div className="skills_container">
        <h2 className="skills_title">Soft skills</h2>
      <div>
      <div>
          <h4 className="soft_html">Teamwork <span className="gal_soft">&#10003;</span></h4>
          <h4 className="soft_html">Responsibility <span className="gal_soft">&#10003;</span></h4>
          <h4 className="soft_html">Relocation <span className="gal_soft">&#10003;</span></h4>
          <h4 className="soft_html">Confidence <span className="gal_soft">&#10003;</span></h4>
        </div>
      </div>
      <h2 className="skills_title">Language Skills</h2>
      <div>
          <h4 className="soft_html">English</h4>
          <div className="soft_ruler"><div className="soft_meter eng"></div></div>
        </div>
        <div className="education_container">
        <h2 className="skills_title">Education</h2>
        <p className="goit">GoIT(09.2018-02.2019)</p>
        <p className="goit_spec">Specialization: <span className="fullstack">Fullstack JavaScript Developer.</span></p> 
        <p className="addit">Additional info: <span className="fullstack">Fond of table tennis, on weekends I visit the sights of Kiev.</span></p>
      </div>
      </div>
    </div>
  );
};

export default Skills;