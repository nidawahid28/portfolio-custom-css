import React from 'react';
import "../app/styles/about.css";

const About = () => {
  return (
    <div id="about" className="about-container">
      <h2 className='about-heading' data-aos="zoom-in-up">
        About Me
      </h2>
      <p className='about-text' data-aos="zoom-in-up">
      I am a student at GIAIC, pursuing a course in Artificial Intelligence, Web 3.0, and the Metaverse.
      Driven by a passion for technology, I am committed to learning new skills to stay updated with the latest innovations.
      </p>
    </div>
  );
};

export default About;

