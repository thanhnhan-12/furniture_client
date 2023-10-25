import { mainURL } from '../config';
import { createClient } from './axiosClient';

const client = createClient(mainURL);

export const adminApi = {
  userStatistics: () => {
    return client.get('/admin/userStatistics');
  },

  bestSellingProducts: () => {
    return client.get('/admin/bestSellingProducts');
  },

  monthlyRevenueStatistics: () => {
    return client.get('/admin/monthlyRevenueStatistics');
  },

  searchProductName: (productName) => {
    return client.get(`/admin/searchProductName?productName=${productName}`);
  },
};
