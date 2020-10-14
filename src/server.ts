import express, { json } from 'express';

import './database/connection';

import routes from './routes';

const app = express();

app.use(json());

app.use(routes);

app.listen(3333, () => console.log('Server is running.'));
