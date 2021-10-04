import React from 'react';

const Experience = ({ details }) => {
  const { employerName, period, role, techStack } = details;
  return (
    <div className="col-6">
      <div className="card-header bg-secondary box-shadow">{employerName}</div>
      <div className="card-body bg-warning">
        <div className="card-title"> {period} </div>
        <div>{role}</div>
        <h5 className="card-text">Technology Stack: {techStack}</h5>
      </div>
    </div>
  );
};

export default Experience;
