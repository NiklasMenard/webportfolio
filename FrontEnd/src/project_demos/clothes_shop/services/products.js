import axios from 'axios';

// const baseUrl = 'https://www.niklasmenard.com/api/products';
const baseUrl = 'http://localhost:3001/api/products';

const getAllProducts = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

export default { getAllProducts };
