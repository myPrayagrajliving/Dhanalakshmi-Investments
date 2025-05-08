import React, { useState } from "react";
import "./Contact.css";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "contactMessages"), {
        ...formData,
        timestamp: serverTimestamp(),
      });
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      alert("Error submitting form: " + error.message);
    }
  };

  return (
    <div className="contact-page" style={{ marginTop: "80px", marginBottom: "60px" }}>
      <h1>Contact Us</h1>
      <p className="contact-desc">
        Welcome to our contact page. We are here to help you with your queries, services,
        partnerships, or just to say hello. Our team will respond as soon as possible.
        Please fill in your details below, and let’s connect!
        <br /><br />
        Whether you’re a customer, collaborator, or just curious, we’d love to hear from you.
        Drop a message, and we’ll get in touch.
      </p>

      {!submitted ? (
        <form className="contact-form" onSubmit={handleSubmit}>
          <input name="name" type="text" placeholder="Your Name" required value={formData.name} onChange={handleChange} />
          <input name="email" type="email" placeholder="Your Email" required value={formData.email} onChange={handleChange} />
          <textarea name="message" rows="5" placeholder="Your Message" required value={formData.message} onChange={handleChange}></textarea>
          <button type="submit">Send Message</button>
        </form>
      ) : (
        <div className="submitted-msg">Thank you! We'll get back to you soon.</div>
      )}

      <h2>Join Us On</h2>
      <div className="join-us">
        <a href="https://facebook.com" target="_blank" className="join-card">Facebook</a>
        <a href="https://instagram.com" target="_blank" className="join-card">Instagram</a>
        <a href="https://linkedin.com" target="_blank" className="join-card">LinkedIn</a>
      </div>
    </div>
  );
}
