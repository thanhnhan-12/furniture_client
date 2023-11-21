import queryString from 'query-string';
import { mainURL } from '../config';
import { createClient } from './axiosClient';

const client = createClient(mainURL);

export const productApi = {
  getAllProduct: () => {
    return client.get('/product');
  },

  getProductByID: (productID) => {
    return client.get(`/product/${productID}`);
  },

  addProduct: (formData) => {
    return client.post('/product/addProduct', formData);
  },

  getProductList: (filters) => {
    const params = queryString.stringify(filters);
    return client.get(`/product?${params}`);
  },
};
