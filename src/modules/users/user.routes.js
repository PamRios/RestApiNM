import { Router } from 'express';
import { validate } from 'express-validation';
import * as userController from './user.controllers';
import userValidation from './user.validations';

const routes = new Router();

// POST /api/v1/users/signup
routes.post('/signup', validate(userValidation.signup), userController.signup);
export default routes;
