import { mainURL } from '../config';
import { createClient } from './axiosClient';

const client = createClient(mainURL);

export const cartApi = {
  createCart: () => {
    return client.post("/cart")
  }
}