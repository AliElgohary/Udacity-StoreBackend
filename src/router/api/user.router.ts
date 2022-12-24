import express, { Request, Response } from 'express';
const Userrouter = express.Router();
import { authMiddleWare } from "../../middlewares/user.authentication";
import * as controller from '../../controllers/user.controller'


Userrouter.get('/', authMiddleWare, controller.GetAllUsers);
Userrouter.get('/:id', authMiddleWare, controller.GetUserById);
Userrouter.post('/', authMiddleWare, controller.CreateUser);
Userrouter.delete('/:id', authMiddleWare, controller.DeleteUser);



Userrouter.patch('/:id', (req, res) => { })

export default Userrouter;
 


