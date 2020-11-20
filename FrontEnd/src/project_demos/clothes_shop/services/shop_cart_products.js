import axios from 'axios';

//const baseUrl = 'https://www.niklasmenard.com/api/cart_products';
const baseUrl = 'http://localhost:3001/api/cart_products';

const getCartProducts = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const addToCart = async (cartItem) => {
  const response = await axios.post(baseUrl, cartItem)
  return response.data;
};

export default { getCartProducts, addToCart };
