import React from "react";
import AboutRow1 from "../components/AboutRow1";
import AboutRow2 from "../components/AboutRow2";
import AboutRow3 from "../components/AboutRow3";

export default function About() {
  return (
    <div style={{ marginTop: "80px", marginBottom: "60px" }}>
      <h1 style={{ textAlign: "center", margin: "20px 0" }}>About Us</h1>
      <AboutRow1 />
      <AboutRow2 />
      <AboutRow3 />
    </div>
  );
}
