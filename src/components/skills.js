import React from 'react';
import './skills.css';

const Skills = () => {
  const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'Node.JS',
    'Express',
    'MySQL',
    'SQL Server',
    'MongoDB',
    'Git',
    'Heroku',
    'Postman',
    'Selenium',
    'Azure',
  ];
  return (
    <div>
      <div className="tech-stack p-4" id="skill">
        <div className="title">🚀 Skills</div>
        <div className="d-flex flex-wrap">
          {skills
            .map((s) => {
              return <div class="skill-set">{s}</div>;
            })}
        </div>
      </div>
    </div>
  );
};

export default Skills;