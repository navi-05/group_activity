import express from 'express'
import cors from 'cors'
import productRouter from './routes/product.js';
import axios from 'axios';

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


// Fetch data from API
const API_URL = 'https://dummyjson.com/products?limit=10';
axios.get(API_URL)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });