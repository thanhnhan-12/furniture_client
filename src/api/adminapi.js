import { mainURL } from '../config';
import { createClient } from './axiosClient';

const client = createClient(mainURL);

export const adminApi = {
  userStatistics: () => {
    return client.get('/admin/userStatistics');
  },
};
