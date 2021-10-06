import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(path.resolve(), '.env') });

import Projects from '../models/projects';
import Experience from '../models/experience';

mongoose.connect(process.env.DB_URL);

const projectSeed = [
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

Projects.deleteMany({})
  .then(() => Projects.collection.insertMany(projectSeed))
  .then(data => {
    console.log("Project records inserted!");
  })
  .catch(err => {
    console.error(err);
  });

  
const experienceSeed = [
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

Experience.deleteMany({})
  .then(() => Experience.collection.insertMany(experienceSeed))
  .then(data => {
    console.log("Experience records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });