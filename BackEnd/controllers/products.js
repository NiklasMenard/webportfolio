import { getAllProducts } from './sql_queries';

const productRouter = require('express').Router();
const client = require('../utils/config');

productRouter.get('/', async (req, res) => {
  try {
    const allProducts = await client.query(getAllProducts);
    res.json(allProducts.rows);
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = productRouter;
