import express, { Request, Response } from 'express';
const orderRouter = express.Router();
import { verifyAuthToken } from "../../middlewares/user.authentication";
import * as controller from '../../controllers/order.controllers';

orderRouter.get('/', controller.allOrders);
orderRouter.post('/', controller.CreateOrder);
orderRouter.delete('/:id', controller.DeleteOrder);
orderRouter.get('/:id', verifyAuthToken, controller.GetOneOrder);


export default orderRouter;