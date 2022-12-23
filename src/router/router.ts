import express from 'express';
import Userrouter from './api/user.router';
import Productrouter from './api/product.router'

const appRouter = express.Router();

appRouter.use('/users', Userrouter);
appRouter.use('/products', Productrouter);

//appRouter.use('/orders', Orderrouter);



export default appRouter;

