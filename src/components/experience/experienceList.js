import React, { useEffect, useState } from 'react';
import Experience from './experience';
import './experience.css';

const ExperienceList = () => {
  const [experienceDetails, setExperienceDetails] = useState([]);
  useEffect(() => {
    fetch('/api/experiences')
    .then(results => results.json())
    .then(data => setExperienceDetails(data))
  })
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
