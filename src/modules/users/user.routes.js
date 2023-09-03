import {Router} from 'express';
import * as userController from "./user.controllers";

const routes = new Router();
routes = new Router();
routes.post('./singup', userController.singUp);
export default routes;