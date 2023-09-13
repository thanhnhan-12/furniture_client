export const getLocalStorage = (key) => {
  if (typeof window !== 'undefined') {
    const item = localStorage.getItem(key);
    return item;
  }
};

export const getRoles = () => {
  if (typeof window !== 'undefined') {
    const roles = JSON.parse(localStorage.getItem('roles')) || [];
    return roles;
  }
  return [];
};

