import express from 'express'
import cors from 'cors'
import productRouter from './routes/product.js';

const app = express();
const PORT = 3000;

// MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors())

// HOME ROUTE (GREETING)
app.get('/', (_, res) => res.send("WELCOME TO THE GROUP ACTIVITY"))

// ROUTES
app.use('/products', productRouter)


app.listen(PORT, () => console.log(`SERVER STARTED ON PORT: ${PORT}`))