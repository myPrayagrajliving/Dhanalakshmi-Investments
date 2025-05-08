import React from 'react';
import './WhatsAppButton.css';

export default function WhatsAppButton() {
  const message = encodeURIComponent("Hi, I'm interested in your services!");
  const number = "919876543210"; // Replace with your WhatsApp number
  const url = `https://wa.me/${number}?text=${message}`;

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="whatsapp-float">
      💬
    </a>
  );
}
