import React from 'react';
import Experience from './experience';
import './experience.css';

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
        GitHub`,
    },
    {
      employerName: 'L&T Infotech (LTI), PA, USA and Mumbai, India',
      period: 'Nov 09- Dec 14',
      role: 'Business Analyst/ QA Lead',
      techStack: `Guidewire Claims Center,
        Guidewire Policy Center,
        JIRA,
        HP ALM,
        HP UFT,
        Share Point,
        SVN,
        Java,
        Gosu,
        SQL Server`,
    },
    {
      employerName: 'Auditime Information Systems (I) Ltd., Mumbai, India',
      period: 'Jul 07 – Nov 09',
      role: 'QA Team Lead',
      techStack: `IIMS, ASP.NET, Oracle 9i`,
    },
    {
      employerName: 'Eclerx, Mumbai, India',
      period: 'Feb 07 – Jul 07',
      role: 'QA Tester',
      techStack: `Dell Horizon,
        SharePoint,
        HP Quality Center,
        MS Excel`,
    },
    {
      employerName: 'Dyna Hi-Tech Power Systems Ltd., Mumbai, India',
      period: 'Apr 05 – Oct 06',
      role: 'QA Tester',
      techStack: `MS Excel`,
    },
  ];

  return (
    <div className="p-4" id="experience">
      <div className="experience">Work Experience</div>
      <div className="mb-2">
        A highly competent and results oriented IT Professional with over
        Thirteen (13) years of experience in diverse roles: Leadership, Business
        Analysis and Software testing.{' '}
      </div>

      <div className="mb-2">
        Quality focused dynamic leader with ability to motivate and lead
        diverse, global cross-functional teams in fulfillment of corporate
        productivity and bottom-line objectives. Proven ability to bridge
        technology and business goals to provide productive solutions, improve
        revenue, margins, workplace productivity.
      </div>

      <div className="mb-2">
        Detail-focused, result-oriented IT professional in Information
        technology as a Scrum Master, Business Analyst, and Quality Analyst in
        high volume, intense customer focused service industries: e-Commerce,
        Retail, Insurance, Finance and Media – Entertainment.
      </div>

      <div className="row" id="experience-lists">
        {experienceDetails.map((e, i) => (
          <Experience key={i} details={e}></Experience>
        ))}
      </div>
    </div>
  );
};

export default ExperienceList;
