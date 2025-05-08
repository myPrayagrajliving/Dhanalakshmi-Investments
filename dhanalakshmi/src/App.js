// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import WriteTestimonial from "./pages/WriteTestimonial";
import Blog1 from "./pages/blog1";
import Blog2 from "./pages/blog2";
import Blog3 from "./pages/blog3";
import Blog4 from "./pages/blog4";
import Blog5 from "./pages/blog5";
import Blog6 from "./pages/blog6";
import EmiCalculator from "./pages/emiCalculator";
import NotFound from "./pages/NotFound";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/write-testimonial" element={<WriteTestimonial />} />
        <Route path="/blog1" element={<Blog1 />} />
        <Route path="/blog2" element={<Blog2 />} />
        <Route path="/blog3" element={<Blog3 />} />
        <Route path="/blog4" element={<Blog4 />} />
        <Route path="/blog5" element={<Blog5 />} />
        <Route path="/blog6" element={<Blog6 />} />
        <Route path="/emicalculator" element={<EmiCalculator />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
      <WhatsAppButton />
      <Footer />
    </Router>
  );
}

export default App;
