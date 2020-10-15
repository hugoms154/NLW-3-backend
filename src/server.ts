import express, { json } from 'express';

import path from 'path';

import './database/connection';

import routes from './routes';

const app = express();

app.use(json());

app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));

app.listen(3333, () => console.log('Server is running.'));
