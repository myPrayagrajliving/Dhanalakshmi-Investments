import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function WriteTestimonial() {
  const [data, setData] = useState({ name: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "testimonials"), {
        ...data,
        timestamp: serverTimestamp(),
      });
      setSubmitted(true);
      setData({ name: "", message: "" });
    } catch (err) {
      alert("Submission failed: " + err.message);
    }
  };

  return (
    <div style={{ marginTop: "80px", marginBottom: "60px", padding: "20px" }}>
      <h1>Write a Testimonial</h1>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="Your Name"
            required
            value={data.name}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Your Testimonial"
            required
            value={data.message}
            onChange={handleChange}
            rows="5"
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <p>✅ Thank you for your feedback!</p>
      )}
    </div>
  );
}
