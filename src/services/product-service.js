import axios from 'axios';

class ProductService {
  baseUrl =
    'https://vitejsviteslg1wm-4gsm--3000--77657b1e.local-credentialless.webcontainer.io';

  constructor() {}

  async getAllProductsByType(type) {
    return await axios.get(`${this.baseUrl}/${type}`);
  }

  async getProductByTypeAndById(type, id) {
    return await axios.get(`${this.baseUrl}/${type}/${id}`);
  }
}

const productService = new ProductService();

export default productService;
