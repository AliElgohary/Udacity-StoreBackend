import express from 'express';
import Userrouter from './api/user.router';

const appRouter = express.Router();

appRouter.use('/user', Userrouter);

// router orders
// router products

export default appRouter;