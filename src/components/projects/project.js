import React from 'react';
import './project.css';

const Project = ({ details }) => {
  const { gitHubURL, projectTitle, projecImg, projectDesc, deployLink } = details;
  return (
    <div className="col-4">
      <div className="card mb-4 box-shadow">
        <a href={gitHubURL} target="_blank">
          <img
            className="card-img-top project-imgcard"
            alt={projectTitle}
            src={projecImg}
          ></img>
        </a>
        <div className="card-body">
          <h4>{projectTitle}</h4>
          <div className="card-text">{projectDesc}</div>
        </div>
        <div className="card-footer d-flex justify-content-between">
          <a
            href={gitHubURL}
            title={gitHubURL}
            target="_blank"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href={deployLink}
            title={deployLink}
            target="_blank"
          >
            <i className="fas fa-server"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
