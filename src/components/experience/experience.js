import React from 'react';
import'./experience.css';

const Experience = ({ details }) => {
  const { employerName, period, role, techStack } = details;
  return (
    <div className="col-6 box-shadow mb-4 mr-4">
      <div className="empName card-header">{employerName}</div>
      <div className="card-body">
        <div className="card-title mb-2"> {period}</div>
        <div className="card-subtitle mb-2">{role}</div>      
        <div className="card-text">Technology Stack: {techStack}</div>
      </div>
    </div>
  );
};

export default Experience;
