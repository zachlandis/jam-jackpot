import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"; 
import { logoutUser } from "./Users/UsersSlice";
import { Link } from "react-router-dom";
import "../index.css";

function NavBar() {
  const currentUser = useSelector((state) => state.users.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser()).then(() => {
      navigate('/login');
    });
  };

  return (
    <nav className="navbar">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Jam Jackpot
        </Link>

        <div className="navbar-links">
          <ul className="nav-list">
            {currentUser ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/giveaways">
                    Giveaways
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/admin">
                    Admin
                  </Link>
                </li>
              </>
            ) : null}
          </ul>
        </div>

        <div className="user-dropdown">
          {currentUser ? (
            <div className="user-menu">
              <span className="user-name">
                {currentUser.first_name} {currentUser.last_name}
              </span>
              <button className="nav-link" onClick={handleLogout}>
                Logout
              </button>
            </div>
          ) : ( 
            <div className="auth-links">
              <Link className="nav-link" to="/users/new">
                Sign Up
              </Link>
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
