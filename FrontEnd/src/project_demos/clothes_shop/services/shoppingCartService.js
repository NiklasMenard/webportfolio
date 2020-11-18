import axios from 'axios';

//const baseUrl = 'https://www.niklasmenard.com/products';
const baseUrl = 'http://localhost:5000/cart_products';

const getAllShoppingCartProducts = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

export default { getAllShoppingCartProducts };
