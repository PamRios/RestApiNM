import {Router} from 'express';
import * as userController from "./user.controllers";

let routes = new Router();
routes = new Router();

// POST /api/v1/users/singup
routes.post('/singup', userController.singUp);
export default routes;