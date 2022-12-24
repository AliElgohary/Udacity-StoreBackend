import express from 'express';
import Userrouter from './api/user.router';
import Productrouter from './api/product.router';
import orderRouter from './api/order.router';

const appRouter = express.Router();

appRouter.use('/users', Userrouter);
appRouter.use('/products', Productrouter);
appRouter.use('/orders', orderRouter);

export default appRouter;

