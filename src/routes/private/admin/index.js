import React from 'react';
import { Navigate } from 'react-router';
import { checkRoleAdmin } from '../../../utils/common';
import { useAppSelector } from '../../../redux';

export const PrivateAdmin = ({ children }) => {
  const { token, roles } = useAppSelector((state) => state.auth);

  if (checkRoleAdmin(roles, token)) {
    return <Navigate to="/admin/dashboard" />;
  }

  return children;
};

export const PrivateDashboard = ({ children }) => {
  const { token, roles } = useAppSelector((state) => state.auth);

  if (!checkRoleAdmin(roles, token)) {
    return <Navigate to="/auth/admin/login" replace />;
  }
  return children;
};
