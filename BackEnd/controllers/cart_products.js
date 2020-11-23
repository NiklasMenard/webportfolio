const cartRouter = require('express').Router();
const client = require('../utils/config');
const SQL = require('./sql_queries');

cartRouter.get('/', async (req, res) => {
  try {
    const allProducts = await client.query(SQL.getAllCartProducts);
    res.json(allProducts.rows);
  } catch (err) {
    console.error(err.message);
  }
});

cartRouter.post('/', async (req, res) => {
  try {
    const product = req.body;
    const quantity = 1;
    await client.query(
      'INSERT INTO cart_items (product_detail_id, quantity) VALUES($1, $2)',
      [product.product_detail_id, quantity],
    );
    const newCartProduct = await client.query(SQL.getAddedCartProduct, [
      product.product_detail_id,
    ]);

    res.json(newCartProduct.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

cartRouter.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await client.query('DELETE FROM cart_items WHERE product_detail_id=($1);', [
      id,
    ]);
    res.status(204).end();
  } catch (err) {
    console.error(err.message);
  }
});

cartRouter.put('/increase/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await client.query('UPDATE cart_items SET quantity = quantity + 1 WHERE product_detail_id = ($1);', [
      id,
    ]);
    res.status(204).end();
  } catch (err) {
    console.error(err.message);
  }
});

cartRouter.put('/decrease/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await client.query('UPDATE cart_items SET quantity = quantity - 1 WHERE product_detail_id = ($1);', [
      id,
    ]);
    res.status(204).end();
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = cartRouter;
