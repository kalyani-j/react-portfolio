import React from 'react';
import'./experience.css';

const Experience = ({ details }) => {
  const { employerName, period, role, techStack } = details;
  return (
    <div className="empHistory col-6 box-shadow mb-4 mr-4">
      <div className="empName card-header">{employerName}</div>
      <div className="card-body">
        <div className="card-title"> {period} 
        <div>{role}</div>
        </div>
        
        <h5 className="card-text"> <strong>Technology Stack:</strong> {techStack}</h5>
      </div>
    </div>
  );
};

export default Experience;
