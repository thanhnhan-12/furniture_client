import { mainURL } from '../config';
import { createClient } from './axiosClient';

const client = createClient(mainURL);

export const userApi = {
  getAllUser: () => {
    return client.get('/user');
  },
};
