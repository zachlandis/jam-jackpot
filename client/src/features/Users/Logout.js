import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { logoutUser } from './UsersSlice';

function Logout() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(logoutUser())
  }, [dispatch]);

  return <Navigate to="/auth" /> 
}

export default Logout;
