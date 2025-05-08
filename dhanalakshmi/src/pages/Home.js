import React from "react";
import Hero from "../components/Hero";
import Cards from "../components/Cards";
import TestimonialSlider from "../components/Slider";

export default function Home() {
  return (
    <div style={{ marginTop: "80px", marginBottom: "60px" }}>
      <Hero />
      <Cards />
      <TestimonialSlider />
    </div>
  );
}
