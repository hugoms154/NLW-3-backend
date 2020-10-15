import express, { json } from 'express';
import 'express-async-errors';
import cors from 'cors';
import path from 'path';
import errorHandler from './errors/handler';

import './database/connection';

import routes from './routes';

const app = express();

app.use(cors());
app.use(json());

app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler);

app.listen(3333, () => console.log('Server is running.'));
