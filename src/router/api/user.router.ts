import express, { Request, Response } from 'express';
const Userrouter = express.Router();
import { verifyAuthToken } from "../../middlewares/user.authentication";
import * as controller from '../../controllers/user.controller'


Userrouter.get('/', verifyAuthToken, controller.GetAllUsers);
Userrouter.get('/:id', verifyAuthToken, controller.GetUserById);
Userrouter.post('/', controller.CreateUser);
Userrouter.delete('/:id', verifyAuthToken, controller.DeleteUser);



export default Userrouter;
 


