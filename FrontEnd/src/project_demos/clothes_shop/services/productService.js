import axios from 'axios';

//const baseUrl = 'https://www.niklasmenard.com/products';
//dev const baseUrl = 'http://localhost:5000/products';
const baseUrl = 'http://localhost:5000/products';

const getAllProducts = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

export default { getAllProducts };
