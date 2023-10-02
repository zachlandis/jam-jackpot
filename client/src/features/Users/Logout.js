import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from './UsersSlice';

function Logout({ setCurrentUser }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Logging out..."); 
    fetch('/logout', {
      method: 'DELETE'
    })
    .then(() => {
      console.log("Logout successful!"); 
      setCurrentUser({})
      navigate('/login');
    })
    .catch(error => {
      console.error("Logout failed:", error);
    });
  }, []);
  


//   useEffect(() => {
//     console.log("Logout executed")
//     const logout = async () => {
//       dispatch(logoutUser());
//       navigate('/login');
//     };

//     logout();
//   }, [dispatch]);

//   return null; 
}

export default Logout;
