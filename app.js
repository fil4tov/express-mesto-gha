import express from 'express';
import mongoose from 'mongoose';
import { usersRouter } from './routes/users.js';
import { cardsRouter } from './routes/cards.js';

const { PORT = 3000 } = process.env;
const app = express();
mongoose.connect('mongodb://localhost:27017/mestodb');

app.use(express.json());

app.use((req, res, next) => {
  req.user = {
    _id: '649485caa20cf7be45885fd7',
  };

  next();
});

app.use('/users', usersRouter);
app.use('/cards', cardsRouter);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Server is running');
});
