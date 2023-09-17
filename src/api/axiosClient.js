import axios, { AxiosError } from 'axios';

export const setClientToken = (token) => {
  if (token) {
    axios.defaults.headers.common.Authorization = token;
  } else {
    delete axios.defaults.headers.common.Authorization;
  }
};

export const createClient = (baseURL, access) => {
  const instance = axios.create({
    baseURL,
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error: AxiosError) => {
      if (error.response && error.response.status === 401) {
        // localStorage.removeItem('token');
        // localStorage.removeItem('roles');
        window.location.href = '/login';
      }
      return Promise.reject(error.response?.data);
    },
  );

  instance.interceptors.request.use(
    (config: any) => {
      const token = localStorage.getItem('token')
        ? localStorage.getItem('token') || ''
        : null;
      if (token) {
        config.headers['Authorization'] = 'Bearer ' + token;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    },
  );

  return instance;
};
