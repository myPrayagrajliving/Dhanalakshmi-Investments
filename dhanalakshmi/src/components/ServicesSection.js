import React from "react";
import { useNavigate } from "react-router-dom";
import "./Services.css";

export default function ServicesSection({ title, items }) {
  const navigate = useNavigate();

  return (
    <div className="services-section">
      <h2>{title}</h2>
      <div className="services-row">
        {items.map((item, index) => (
          <div className="service-card" key={index} onClick={() => navigate(item.path)}>
            <img src={item.image} alt={item.title} />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
