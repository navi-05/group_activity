                                                                                                                                       
import axios from 'axios';

let products = [];

axios.get('https://dummyjson.com/products?limit=10')
  .then(response => {
    products = response.data;
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

export const demoHandler = (req, res) => {
  res.send("Demo Handler")
}

export const getProducts = (req, res) => {
  res.json(products);
};

// GET EACH PRODUCT 
export const getProductById = (req, res) => {
  fetch('https://dummyjson.com/products/1')
  .then(res => res.json())
  .then(product => {
    res.json(product); // Send the fetched product back as a response
  })
  .catch(error => {
    console.error('Error fetching product:', error);
    res.status(500).json({ error: 'Failed to fetch product' });
  });
  }





