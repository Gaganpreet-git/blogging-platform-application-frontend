import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      &copy; 2024 &nbsp;<Link to="/">Blog</Link>
    </div>
  );
};

export default Footer;
