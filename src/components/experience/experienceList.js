import React from 'react';
import Experience from './experience';

const ExperienceList = () => {
  const experienceDetails = [
    {
      employerName: 'ClientServer Tech Solutions, Iselin, NJ, USA',
      period: 'Jul 17- Jun 21',
      role: 'Scrum Master/ Business Analyst',
      techStack: `Net Core,
        ASP.NET MVC,
        HTML,
        CSS,
        JavaScript,
        jQuery,
        Microsoft Azure,
        SQL Server,
        Selenium,
        Jira,
        Git,
        GitHub`
    },
    {
      employerName: 'L&T Infotech (LTI), PA, USA and Mumbai, India',
      period: 'Nov 09- Dec 14',
      role: 'Business Analyst/ QA Lead',
      techStack: 
        `Guidewire Claims Center,
        Guidewire Policy Center,
        JIRA,
        HP ALM,
        HP UFT,
        Share Point,
        SVN,
        Java,
        Gosu,
        SQL Server`
    },
    {
      employerName: 'Auditime Information Systems (I) Ltd., Mumbai, India',
      period: 'Jul 07 – Nov 09',
      role: 'QA Team Lead',
      techStack: `IIMS, ASP.NET, Oracle 9i`
    },
    {
      employerName: 'Eclerx, Mumbai, India',
      period: 'Feb 07 – Jul 07',
      role: 'QA Tester',
      techStack: `Dell Horizon,
        SharePoint,
        HP Quality Center,
        MS Excel`
    },
    {
      employerName: 'Dyna Hi-Tech Power Systems Ltd., Mumbai, India',
      period: 'Apr 05 – Oct 06',
      role: 'QA Tester',
      techStack: `MS Excel`
    },
  ];

  return (
    <div className="experience p-4" id="experience">
      <h1>Work Experience</h1>
      <p>Here's my experience summary.</p>
      
      <div className="row" id="experience-lists">
        {experienceDetails.map((e, i) => (
          <Experience key={i} details={e}></Experience>
        ))}
        </div>
    </div>
  );
};

export default ExperienceList;
