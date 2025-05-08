import React from "react";
import ServicesSection from "../components/ServicesSection";

export default function Services() {
  const row1 = [
    { title: "Web Development", img: "https://source.unsplash.com/300x200/?web", path: "/blog1" },
    { title: "App Development", img: "https://source.unsplash.com/300x200/?app", path: "/blog2" },
    { title: "UI/UX Design", img: "https://source.unsplash.com/300x200/?design", path: "/blog3" },
  ];

  const row2 = [
    { title: "Digital Marketing", img: "https://source.unsplash.com/300x200/?marketing", path: "/blog4" },
    { title: "SEO Services", img: "https://source.unsplash.com/300x200/?seo", path: "/blog5" },
    { title: "Cloud Solutions", img: "https://source.unsplash.com/300x200/?cloud", path: "/blog6" },
  ];

  return (
    <div style={{ marginTop: "80px", marginBottom: "60px" }}>
      <h1 style={{ textAlign: "center" }}>Our Services</h1>
      <ServicesSection title="Expertise – Row 1" items={row1} />
      <ServicesSection title="Insights – Row 2" items={row2} />
    </div>
  );
}
