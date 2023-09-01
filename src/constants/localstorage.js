import { TRole } from '../types/common';

export const getLocalStorage = (key) => {
  if (typeof window !== 'undefined') {
    const item = localStorage.getItem(key);
    return item;
  }
};

export const getRoles = () => {
  if (typeof window !== 'undefined') {
    const roles: TRole[] = JSON.parse(localStorage.getItem('roles')) || [];
    return roles;
  }
  return [];
};

