import express, { Request, Response } from 'express';
const Userrouter = express.Router();
import { authMiddleWare } from "../../middlewares/user.authentication";
import * as controller from '../../controllers/user.controller'


Userrouter.get('/', authMiddleWare, controller.GetAllUsers);
Userrouter.post('/', authMiddleWare, controller.CreateUser);
Userrouter.delete('/delete:id', authMiddleWare, controller.DeleteUser);
Userrouter.get('/:id', authMiddleWare, controller.GetUserById);
Userrouter.get('/:id', authMiddleWare, controller.UpdateUser);

export default Userrouter;
 


