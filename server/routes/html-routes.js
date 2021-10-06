import express from 'express';
import path from 'path';

const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile(path.join(path.resolve(), './build/index.html'));
});

router.get('/experience', (req, res) => {
  res.sendFile(path.join(path.resolve(), './build/index.html'));
});

export default router;
