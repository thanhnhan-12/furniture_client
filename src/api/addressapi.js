import { mainURL } from '../config';
import { createClient } from './axiosClient';

const client = createClient(mainURL);

export const addressApi = {
  getProvince: () => {
    return client.get(`/province`);
  },

  getDistrict: () => {
    return client.get(`/district`);
  },

  getWard: (districtID) => {
    return client.get(`/ward?districtID=${districtID}`);
  },

  getAddressByUser: () => {
    return client.get('/address');
  },

  addAddress: (payload) => {
    return client.post('/address/addAddress', payload);
  },

  deleteAddressByID: (addressID) => {
    return client.delete(`/address/${addressID}`);
  },
};
