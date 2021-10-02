import React from 'react';
import aboutimg from '../images/kalyani-avatar-200.png';

const About = () => {
  return (
    <div id="about" className="p-4 d-flex flex-row">
      <div className="avatar card mr-4">
        <img src={aboutimg} alt="kalyani-avatar"></img>
      </div>
      <div className="heading">
        <div className="title" id="about-me">
          👩‍💻 About me
        </div>
        <div className="desc">
          Hey, I am Kalyani. Web Development is my passion. I am pursuing Full
          Stack Web Developer Coding Bootcamp at Rutgers University, New Jersey.
          I have over thirteen (13) years of experience in the field of
          Information Technology, working in diverse roles: Developer, Scrum
          Master and QA Tester in my career.
        </div>
      </div>
    </div>
  );
};

export default About;