import express, { json } from 'express';

import './database/connection';

const app = express();

app.use(json());

app.listen(3333, () => console.log('Server is running.'));
