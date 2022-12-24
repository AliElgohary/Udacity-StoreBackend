import express, { Request, Response } from 'express';
const Productrouter = express.Router();
import { verifyAuthToken } from "../../middlewares/user.authentication";
import * as controller from '../../controllers/product.controller';

Productrouter.get('/', controller.getAllProducts);
Productrouter.post('/', verifyAuthToken, controller.CreateProduct);
Productrouter.delete('/:id', verifyAuthToken, controller.DeleteProduct);
Productrouter.get('/:id', controller.getProductByID);


export default Productrouter;