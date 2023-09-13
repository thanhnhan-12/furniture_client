import { ROLE_USER } from "../constants/defaults";

export const messageRequired = (key: string) => {
  return `${key} không được bỏ trống`;
};

export const checkRoleUser = (roleID, token) => {
  if (roleID === ROLE_USER && token) return true;
  return false;
};
