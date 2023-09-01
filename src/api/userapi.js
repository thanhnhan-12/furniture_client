import { mainURL } from '../config';
import { createClient } from './axiosClient';

const client = createClient(mainURL);

export const userApi = {
  
  getMe: () => {
    return client.get('/users/get-me');
  },
};
