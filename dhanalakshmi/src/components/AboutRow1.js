import React from "react";
import { useNavigate } from "react-router-dom";
import "./About.css";

const blogs = [
  { title: "Blog 1", img: "https://source.unsplash.com/300x200/?startup", path: "/blog1" },
  { title: "Blog 2", img: "https://source.unsplash.com/300x200/?technology", path: "/blog2" },
  { title: "Blog 3", img: "https://source.unsplash.com/300x200/?innovation", path: "/blog3" },
];

export default function AboutRow1() {
  const navigate = useNavigate();

  return (
    <div className="about-row">
      {blogs.map((blog, index) => (
        <div className="about-card" key={index} onClick={() => navigate(blog.path)}>
          <img src={blog.img} alt={blog.title} />
          <p>{blog.title}</p>
        </div>
      ))}
    </div>
  );
}
