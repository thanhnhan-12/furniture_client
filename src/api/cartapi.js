import { mainURL } from '../config';
import { createClient } from './axiosClient';

const client = createClient(mainURL);

export const cartApi = {
  createCart: (payload) => {
    return client.post('/cart/createCart', payload);
  },

  getCartByUser: () => {
    return client.get(`/cart`);
  },
};
