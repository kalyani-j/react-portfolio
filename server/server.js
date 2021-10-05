import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// mongoose.connect(process.env.DB_URL, {
//   useNewUrlParser: true,
//   useFindAndModify: false,
// });

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
