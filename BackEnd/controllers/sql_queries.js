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
`;

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
GROUP BY products.product_id, product_details.product_detail_id, cart_items.quantity;
`;

module.exports = { getAllProducts, getAllCartProducts, getAddedCartProduct };
