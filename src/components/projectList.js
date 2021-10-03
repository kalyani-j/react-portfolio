import React from 'react';
import Project from './projects/project';

const ProjectList = () => {
  const projectDetails = [
    {
      projectTitle: 'Investor Portfolio',
      projectDesc:
        'Full stack application for users to manage portfolios of stocks.',
      projecImg: '/assets/images/investor-portfolio.png',
      projectTechstack: [
        'HTML',
        'CSS',
        'JavaScript',
        'Chart.js',
        'Node.js',
        'Express',
        'Third Party API: Polygon, Marketstack',
        'MySQL',
      ],
      gitHubURL: 'https://github.com/Kay-code-1/investor-portfolio',
      deployLink: 'https://investor-portfolio.herokuapp.com',
    },
    {
      projectTitle: 'Astro World Portal',
      projectDesc: 'Explore interesting Space facts from NASA Libraries!',
      projecImg: '/assets/images/astroworld.png',
      projectTechstack: [
        'HTML',
        'CSS',
        'JavaScript',
        'Moment.js',
        'FontAwesome',
        'GoogleFonts',
        'NASA API',
      ],
      gitHubURL: 'https://github.com/Kay-code-1/astronomy-world',
      deployLink: 'https://kay-code-1.github.io/astronomy-world/',
    },
    {
      projectTitle: 'Note Taker',
      projectDesc: 'A business application to take and maintain notes.',
      projecImg: '/assets/images/notes.jpg',
      projectTechstack: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js'],
      gitHubURL: 'https://github.com/Kay-code-1/note-taker',
      deployLink: 'https://notetaker-app-k.herokuapp.com/',
    },
    {
      projectTitle: 'Quiz',
      projectDesc: 'Enjoy the F.R.I.E.N.D.S TV Series Trivia Quiz!',
      projecImg: '/assets/images/quiz.jpg',
      projectTechstack: ['HTML', 'CSS', 'JavaScript'],
      gitHubURL: 'https://github.com/Kay-code-1/quiz-application',
      deployLink: 'https://kay-code-1.github.io/quiz-application/',
    },
    {
      projectTitle: 'Password Generator',
      projectDesc: 'Generate a random password of your choice.',
      projecImg: '/assets/images/password.jpg',
      projectTechstack: ['HTML', 'CSS', 'JavaScript'],
      gitHubURL: 'https://github.com/Kay-code-1/password-generator',
      deployLink: 'https://kay-code-1.github.io/password-generator/',
    },
    {
      projectTitle: 'Weather Forecast',
      projectDesc: 'Get a 5-Day weather forecast of your location quickly.',
      projecImg: '/assets/images/weather.png',
      projectTechstack: ['HTML', 'CSS', 'JavaScipt', 'Open Weather API'],
      gitHubURL: 'https://github.com/Kay-code-1/weather-forecast',
      deployLink: 'https://kay-code-1.github.io/weather-forecast/',
    },
    {
      projectTitle: 'Day Planner',
      projectDesc: 'Plan your work day ahead with Day Planner!',
      projecImg: '/assets/images/day-planner.png',
      projectTechstack: ['HTML', 'CSS', 'JavaScipt', 'Moment JS'],
      gitHubURL: 'https://github.com/Kay-code-1/day-planner',
      deployLink: 'https://kay-code-1.github.io/day-planner/',
    },
  ];
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
