import React from "react";
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2025 My Company | All rights reserved.</p>
      <div className="social-icons">
        <a href="https://facebook.com" target="_blank">FB</a>
        <a href="https://instagram.com" target="_blank">IG</a>
        <a href="https://twitter.com" target="_blank">X</a>
        <a href="https://linkedin.com" target="_blank">LinkedIn</a>
      </div>
    </footer>
  );
}
