import express, { Request, Response } from 'express';
const orderRouter = express.Router();
import { authMiddleWare } from "../../middlewares/user.authentication";
import * as controller from '../../controllers/order.controllers';

orderRouter.get('/', authMiddleWare, controller.allOrders);
orderRouter.post('/', authMiddleWare, controller.CreateOrder);
orderRouter.delete('/:id', authMiddleWare, controller.DeleteOrder);
orderRouter.get('/:id', authMiddleWare, controller.GetOneOrder);

orderRouter.patch('/:id', (req, res) => { })

export default orderRouter;