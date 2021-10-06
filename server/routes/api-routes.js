import express from 'express';
import path from 'path';

const router = express.Router();

router.get('/', (req, res) => {
  res.send({ message: 'Welcome to my portfolio' });
});

export default router;
