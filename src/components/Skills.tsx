import React from 'react';
import "../app/styles/skills.css";

const Skills = () => {
  return (
    <div id="skills" className="skills-container">
      <div className="skills-grid">
    
        <div data-aos="zoom-in-up" className="skills-left">
          <h2 className="skills-heading">Technologies I Work With</h2>
          <p className="skills-text">
            I have a strong foundation in web development, focusing on HTML, CSS, and JavaScript. My experience includes building dynamic, user-friendly applications using frameworks like Next.js and efficiently styling them with Tailwind CSS. With a commitment to continuous learning, I stay current with new technologies to broaden my skills and bring value to each project.
          </p>
        </div>

      
          <div className="skills-right">
            <div className="skills-icons-grid">
              <div className="skills-space">
              <h2 data-aos="zoom-in-up">HTML</h2>
              <h2 data-aos="zoom-in-up">CSS</h2>
              <h2 data-aos="zoom-in-up">JavaScript</h2>
            </div>
            <div className="skills-space">
              <h2 data-aos="zoom-in-up">Tailwind CSS</h2>
              <h2 data-aos="zoom-in-up">TypeScript</h2>
              <h2 data-aos="zoom-in-up">Next.js</h2>
            </div>
          </div> 
        </div>
      </div>
   </div>       
  );
};

export default Skills;
