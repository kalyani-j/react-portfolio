import React, { useEffect, useState } from 'react';
import Project from './projects/project';

const ProjectList = () => {
  const [projectDetails, setProjectDetails] = useState([]);
  useEffect(() => {
    fetch('/api/projects')
      .then((results) => results.json())
      .then((data) => setProjectDetails(data));
  });
  return (
    <div className="projects p-4" id="projects">
      <div className="title">Projects</div>
      <p>
        Here are the my completed projects during Coding Bootcamp at Rutgers
        University.
      </p>
      <div className="row" id="project-lists">
        {projectDetails.map((p, i) => (
          <Project key={i} details={p}></Project>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
