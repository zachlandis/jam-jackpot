import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "../index.css";

function NavBar() {

  const currentUser = useSelector((state) => state.users.currentUser)

  console.log(currentUser)


  return (
    <nav className="navbar">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Jam Jackpot
        </Link>

        <div className="navbar-links">
          <ul className="nav-list">
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
          </ul>
        </div>

        <div className="user-dropdown">
          {currentUser ? (
            <div className="user-menu">
              <span className="user-name">
                {currentUser.first_name} {currentUser.last_name}
              </span>
              <Link className="nav-link" to="/logout">
                Logout
              </Link>
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
