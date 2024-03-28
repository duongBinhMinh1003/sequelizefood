import express from 'express'
import foodRouter from './FoodRouter.js';

const rootRouter = express.Router();

rootRouter.use("/food",foodRouter);
export default rootRouter;