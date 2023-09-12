import { Router } from 'express';
import * as userController from './user.controllers';

const routes = new Router();

// POST /api/v1/users/singup
routes.post('/singup', userController.singUp);
export default routes;
