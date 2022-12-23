import express, { Request, Response } from 'express';
const Productrouter = express.Router();
import { authMiddleWare } from "../../middlewares/user.authentication";
import * as controller from '../../controllers/product.controller';

Productrouter.get('/', authMiddleWare, controller.getAllProducts);
Productrouter.post('/', authMiddleWare, controller.CreateProduct);
Productrouter.delete('/:id', authMiddleWare, controller.DeleteProduct);
Productrouter.get('/:id', authMiddleWare, controller.getProductByID);

Productrouter.patch('/:id', (req, res) => { })

export default Productrouter;