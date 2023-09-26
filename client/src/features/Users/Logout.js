import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logoutUser } from './UsersSlice'; // Import the logoutUser action

function Logout() {
  const dispatch = useDispatch();
//   const history = useHistory();

  function handleLogout() {
    dispatch(logoutUser());

    // history.push('/auth');
  }

  return (
    <span onClick={handleLogout} style={{ cursor: 'pointer', textDecoration: 'underline' }}>
      Logout
    </span>
  );
}

export default Logout;
