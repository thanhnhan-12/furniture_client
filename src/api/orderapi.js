import { mainURL } from '../config';
import { createClient } from './axiosClient';

const client = createClient(mainURL);

export const orderApi = {
  createOrder: (payload) => {
    return client.post('/order/createOrder', payload);
  },
};
