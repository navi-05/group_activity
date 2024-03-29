import express from 'express'
import { demoHandler, getProductById, getProducts} from '../handlers/products.js';


const productRouter = express.Router();

productRouter.get('/', demoHandler);

export default productRouter

productRouter.get('/', getProducts)
productRouter.get('/:id', getProductById)