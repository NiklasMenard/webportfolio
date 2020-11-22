const productRouter = require("express").Router();
const client = require("../utils/config");

productRouter.get('/', async (req, res) => {
    try {
      const allProducts = await client.query(getAllProducts);
      res.json(allProducts.rows);
    } catch (err) {
      console.error(err.message);
    }
  });

const getAllProducts = `SELECT 
products.product_id, 
products.category_id,
products.name,
products.gender,
products.picture_key,
json_agg(
    json_build_object('detail_key', product_details.product_detail_id, 
    'size', product_details.size)) AS SIZES
FROM 
  products 
    INNER JOIN product_details
        ON products.product_id = product_details.product_id
GROUP BY products.product_id;
`

module.exports = productRouter;