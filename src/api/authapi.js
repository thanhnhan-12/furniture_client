import { mainURL } from '../config';
import { createClient } from './axiosClient';

const client = createClient(mainURL);

export const authApi = {
  login: (payload) => {
    return client.post('/auth/login', payload);
  },

  register: (payload) => {
    return client.post('/auth/register', payload);
  },
}
