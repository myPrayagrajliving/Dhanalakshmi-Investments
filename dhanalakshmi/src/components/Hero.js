import React from "react";
import "./Hero.css";

export default function Hero() {
  const message = encodeURIComponent("Hi! I’m interested in your services.");
  const number = "919876543210"; // Replace with your number
  const whatsappURL = `https://wa.me/${number}?text=${message}`;

  return (
    <div className="hero">
      <div className="overlay">
        <h1>Welcome to Our Website</h1>
        <p>Your journey to the best services starts here.</p>
        <a className="hero-btn" href={whatsappURL} target="_blank" rel="noopener noreferrer">
          Chat on WhatsApp
        </a>
      </div>
    </div>
  );
}
