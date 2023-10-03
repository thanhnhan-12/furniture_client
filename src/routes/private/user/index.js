import React from 'react';
import { useAppSelector } from '../../../redux';
import { Navigate } from 'react-router-dom';

export const PrivateUser = ({ children }) => {
  const { roles, token } = useAppSelector((state) => state.auth);

  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  // console.log("isAuthenticated: ", isAuthenticated);

  // console.log("LOG", token);

  if (!token) {
    return <Navigate to="/login" />
  }

  return children;
};
