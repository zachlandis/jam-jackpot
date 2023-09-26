import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function NavBar() {
  const currentUser = useSelector((state) => state.users.currentUser);

  return (
    <nav className="navbar">
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/giveaways">Giveaways</Link>
        <Link to="/admin">Admin</Link>
        {currentUser ? (
          <>
            <span>{currentUser.first_name} {currentUser.last_name}</span>
            <Link to="/logout">Logout</Link>
          </>
        ) : (
          <>
            <Link to="/users/new">Sign Up</Link>
            <Link to="/auth">Login</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
