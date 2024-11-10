import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

const foodRoutes = require('./routes/foodRoutes');
const userRoutes = require('./routes/userRoutes');
const logRoutes = require('./routes/logRoutes');
const dailiesRoutes = require('./routes/dailiesRoutes')

import { errorHandler } from './middleware/errorHandler';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

app.use('/food', foodRoutes);
app.use('/users', userRoutes);
app.use('/logs', logRoutes);
app.use('/dailies',dailiesRoutes)

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
