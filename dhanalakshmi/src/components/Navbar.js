import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">MyLogo</Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
    </nav>
  );
}
