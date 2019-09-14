import express, { Application } from 'express';
import UsersRoutes from './routes/users';

const app: Application = express();

app.use(UsersRoutes);

export default app;
