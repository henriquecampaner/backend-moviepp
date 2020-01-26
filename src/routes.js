import { Router } from 'express';

import UserController from './app/Controllers/UserController';
import MoviesController from './app/Controllers/MoviesController';
import SeriesController from './app/Controllers/SeriesController';
import SessionController from './app/Controllers/SessionController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/user', UserController.store);

routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.put('/user', UserController.update);

routes.get('/user/movie', MoviesController.index);
routes.put('/user/movie', MoviesController.update);

routes.get('/user/serie', SeriesController.index);
routes.put('/user/serie', SeriesController.update);

export default routes;
