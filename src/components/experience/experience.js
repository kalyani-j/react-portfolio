import React from 'react';

const Experience = ({ expDetails }) => {
  const { employerName, period, role, techStack } = expDetails;
  return (
    <div className="col-6">
      <div className="card-header"></div>
      <div className="card-body">
        <h5 className="card-title"> </h5>
        <p className="card-text"></p>
      </div>
    </div>
  );
};

export default Experience;
