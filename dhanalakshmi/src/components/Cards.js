import React from "react";
import "./Cards.css";
import { useNavigate } from "react-router-dom";

export default function Cards() {
  const navigate = useNavigate();

  return (
    <div className="cards-container">
      <div className="card" onClick={() => navigate("/blog1")}>
        <img src="https://source.unsplash.com/300x200/?blog" alt="Blog 1" />
        <p>Read Blog Post 1</p>
      </div>
      <div className="card" onClick={() => navigate("/blog2")}>
        <img src="https://source.unsplash.com/300x200/?technology" alt="Blog 2" />
        <p>Read Blog Post 2</p>
      </div>
      <div className="card" onClick={() => navigate("/emicalculator")}>
        <img src="https://source.unsplash.com/300x200/?calculator" alt="EMI Calculator" />
        <p>Try EMI Calculator</p>
      </div>
    </div>
  );
}
