import { mainURL } from '../config';
import { createClient } from './axiosClient';

const client = createClient(mainURL);

export const categoryApi = {
  getAllCategory: () => {
    return client.get('/category');
  },
};