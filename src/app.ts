import express, { Application, Request, Response } from 'express';
import globalErrorHandler from './app/middlewares/globalErrorhandler';
import notFound from './app/middlewares/notFound';
import router from './app/routes';
import cors from 'cors';
const app: Application = express();
//Middleware to parse incoming JSON request
app.use(express.json());
app.use(
  cors({
    origin: [
      'http://localhost:3000',
      'https://portfolio-client-mocha.vercel.app',
    ],
  }),
);

//Application Routes
app.use('/api/v1', router);

//Base route
app.get('/', (req: Request, res: Response) => {
  res.json({
    status: true,
    message: 'Portfolio Server Live ⚡',
  });
});

// Use the Not Found Middleware
app.use(notFound);
// Use the Global Error Handler
app.use(globalErrorHandler);

export default app;
