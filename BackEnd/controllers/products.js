const productRouter = require('express').Router();
const client = require('../utils/config');
const SQL = require('./sql_queries');

productRouter.get('/', async (req, res) => {
  try {
    const allProducts = await client.query(SQL.getAllProducts);
    res.json(allProducts.rows);
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = productRouter;
