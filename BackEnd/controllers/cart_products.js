const cartRouter = require("express").Router();
const client = require("../utils/config");

cartRouter.get("/", async (req, res) => {
  try {
    const allProducts = await client.query(getAllCartProducts);
    res.json(allProducts.rows);
  } catch (err) {
    console.error(err.message);
  }
});

cartRouter.post("/", async (req, res) => {
  try {
    const product = req.body;
    const quantity = 1;
    await client.query(
      `INSERT INTO cart_items (product_detail_id, quantity) VALUES($1, $2)`,
      [product.product_detail_id, quantity]
    );
    const newCartProduct = await client.query(getAddedCartProduct, [
      product.product_detail_id,
    ]);

    res.json(newCartProduct.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

cartRouter.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await client.query(`DELETE FROM cart_items WHERE product_detail_id=($1);`, [
      id,
    ]);
    res.status(204).end();
  } catch (err) {
    console.error(err.message);
  }
});

cartRouter.put("/increase/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await client.query(`UPDATE cart_items SET quantity = quantity + 1 WHERE product_detail_id = ($1);`, [
      id,
    ]);
    res.status(204).end();
  } catch (err) {
    console.error(err.message);
  }
});


cartRouter.put("/decrease/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await client.query(`UPDATE cart_items SET quantity = quantity - 1 WHERE product_detail_id = ($1);`, [
      id,
    ]);
    res.status(204).end();
  } catch (err) {
    console.error(err.message);
  }
});

const getAllCartProducts = `SELECT 
products.product_id, 
products.category_id,
products.name,
products.picture_key,
cart_items.quantity,
json_agg(
    json_build_object('detail_key', product_details.product_detail_id, 
    'size', product_details.size)) AS SIZES
FROM 
  products 
    INNER JOIN product_details
        ON products.product_id = product_details.product_id
        INNER JOIN CART_ITEMS
            ON CART_ITEMS.product_detail_id = product_details.product_detail_id
GROUP BY products.product_id, product_details.size, cart_items.quantity;
`;
const getAddedCartProduct = `SELECT 
products.product_id, 
products.category_id,
products.name,
products.picture_key,
product_details.product_detail_id,
cart_items.quantity,
json_agg(
    json_build_object('detail_key', product_details.product_detail_id, 
    'size', product_details.size)) AS SIZES
FROM 
  products 
    INNER JOIN product_details
        ON product_details.product_detail_id = ($1) AND product_details.product_id = products.product_id
        INNER JOIN CART_ITEMS
          ON CART_ITEMS.product_detail_id = product_details.product_detail_id
GROUP BY products.product_id, product_details.product_detail_id, cart_items.quantity;`;

module.exports = cartRouter;
