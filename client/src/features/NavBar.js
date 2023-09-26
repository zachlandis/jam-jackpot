import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/giveaways">Giveaways</Link>
        <Link to="/admin">Admin</Link>
        {/* {currentUser ? null : ( */}
            <Link to="/users/new">Sign Up</Link>
        {/* )} */}
        {/* {currentUser ? ( */}
            {/* <Logout />
        ) : ( */}
            <Link to="/auth">Login</Link>
        {/* )} */}
            <Link to="/logout>">Logout</Link>
      </div>
    </nav>
  );
}

export default NavBar;
