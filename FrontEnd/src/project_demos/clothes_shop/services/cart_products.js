import axios from 'axios';

// const baseUrl = 'https://www.niklasmenard.com/api/cart_products';
const baseUrl = 'http://localhost:3001/api/cart_products';

const getCartProducts = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const addToCart = async (cartItemDetailKey) => {
  const response = await axios.post(baseUrl, cartItemDetailKey);
  return response.data;
};

const removeFromCart = async (cartItemDetailKey) => {
  const response = await axios.delete(`${baseUrl}/${cartItemDetailKey}`);
  return response.data;
};

const increaseQuantity = async (modifiedCartItem) => {
  const response = await axios.put(`${baseUrl}/increase/${modifiedCartItem}`);
  return response.data;
};

const decreaseQuantity = async (modifiedCartItem) => {
  const response = await axios.put(`${baseUrl}/decrease/${modifiedCartItem}`);
  return response.data;
};

export default {
  getCartProducts, addToCart, removeFromCart, decreaseQuantity, increaseQuantity,
};
