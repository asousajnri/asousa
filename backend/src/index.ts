import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import path from 'path';

import routes from './routes';

require('dotenv').config();

const app = express();

mongoose.connect(`${process.env.DB_URL_CONNECT}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

app.listen(process.env.PORT || 3333);
