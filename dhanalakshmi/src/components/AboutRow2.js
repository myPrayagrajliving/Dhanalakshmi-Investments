import React from "react";
import "./About.css";

const team = [
  { name: "Alice", role: "Designer", img: "https://source.unsplash.com/300x200/?woman,team" },
  { name: "Bob", role: "Developer", img: "https://source.unsplash.com/300x200/?man,team" },
  { name: "Clara", role: "Marketing", img: "https://source.unsplash.com/300x200/?businesswoman" },
];

export default function AboutRow2() {
  return (
    <div className="about-row">
      {team.map((member, index) => (
        <div className="about-card" key={index}>
          <img src={member.img} alt={member.name} />
          <p><strong>{member.name}</strong><br/>{member.role}</p>
        </div>
      ))}
    </div>
  );
}
