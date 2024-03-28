import express, { response } from 'express'
import mysql from 'mysql2';
import cors from 'cors';
import rootRouter from './src/routes/RootRouter.js';
const app = express();
app.listen(8080);
app.use(cors())
app.use(express.json())
app.use(rootRouter)



    

   