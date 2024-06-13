import express from 'express';
import productsRoutes from './routes/products.routes.js';
import morgan from 'morgan';
import cors from "cors";


const app = express();

//middlewares
app.use(express.json());
app.use(morgan('tiny'));
app.use(cors());


app.use(productsRoutes)


export default app;