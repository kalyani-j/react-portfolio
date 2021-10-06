import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import homeRoutes from './routes/html-routes';
import apiRoutes from './routes/api-routes';

dotenv.config({ path: path.join(path.resolve(), '.env') });

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.DB_URL);
app.use('/', homeRoutes);
app.use('/api', apiRoutes);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
  console.log(`DB running on URL ${process.env.DB_URL}!`);
});
