import React from "react";
import { useNavigate } from "react-router-dom";
import "./About.css";

export default function AboutRow3() {
  const navigate = useNavigate();

  return (
    <div className="about-row">
      <div className="about-card" onClick={() => navigate("/write-testimonial")}>
        <img src="https://source.unsplash.com/300x200/?feedback" alt="Write Testimonial" />
        <p>Write a Testimonial</p>
      </div>
    </div>
  );
}
