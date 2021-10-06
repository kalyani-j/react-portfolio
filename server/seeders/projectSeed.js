let mongoose = require('mongoose');
let db = require('../models');
require('dotenv').config();

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

db.Projects.deleteMany({})
  .then(() => db.Projects.collection.insertMany(projectSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });