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
};
