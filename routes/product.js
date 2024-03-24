import express from 'express'
import { demoHandler } from '../handlers/products.js';

const productRouter = express.Router();

productRouter.get('/', demoHandler);

export default productRouter