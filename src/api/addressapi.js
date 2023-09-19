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
};
