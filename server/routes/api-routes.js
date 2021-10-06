import express from 'express';
import Projects from '../models/projects';
import Experience from '../models/experience';

const router = express.Router();

router.get('/', (req, res) => {
  res.send({ message: 'Welcome to my portfolio' });
});

router.get('/projects', async (req, res) => {
  const projects = await Projects.find({});
  res.status(200).send(projects);
});

router.get('/experiences', async (req, res) => {
  const experiences = await Experience.find({});
  res.status(200).send(experiences);
});

export default router;
