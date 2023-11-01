const isDev = process.env.REACT_APP_NODE_ENV === 'development' ? true : false;

export const baseURL = isDev
  ? process.env.REACT_APP_DEV_API_URL
  : process.env.REACT_APP_API_URL;

export const mainURL = 'http://localhost:8080/api/v1';

export const localPathImages = 'http://localhost:8080/api/v1/images';
