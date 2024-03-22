import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const logout = () => {
    localStorage.clear();
    alert("logout");
  };

  return (
    <div className="header">
      <div className="header_blog-name">Blog</div>
      <nav className="header_navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li onClick={logout}>Logout</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
