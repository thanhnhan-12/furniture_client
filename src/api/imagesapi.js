import { mainURL } from '../config';
import { createClient } from './axiosClient';

const client = createClient(mainURL);

export const imagesApi = {
  getImages: () => {
    return client.get('/images');
  }
}