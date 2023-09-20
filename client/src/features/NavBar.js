import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/giveaways">Giveaways</Link>
        <Link to="/admin">Admin</Link>
      </div>
    </nav>
  );
}

export default NavBar;
