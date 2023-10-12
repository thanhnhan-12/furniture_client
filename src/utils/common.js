import { ROLE_ADMIN, ROLE_USER } from '../constants/defaults';

export const messageRequired = (key) => {
  return `${key} không được bỏ trống`;
};

export const checkRoleUser = (roleID, token) => {
  if (roleID === ROLE_USER && token) return true;
  return false;
};

export const checkRoleAdmin = (idRole, token) => {
  if (idRole.includes(ROLE_ADMIN) && token) return true;

  return false;
};
