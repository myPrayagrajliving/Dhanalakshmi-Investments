import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";

export default function TestimonialSlider() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      const querySnapshot = await getDocs(collection(db, "testimonials"));
      const data = querySnapshot.docs.map(doc => doc.data());
      setTestimonials(data);
    };

    fetchTestimonials();
  }, []);

  const settings = {
    dots: true, infinite: true, speed: 500,
    slidesToShow: 1, slidesToScroll: 1, autoplay: true,
  };

  return (
    <div className="testimonial-slider">
      <Slider {...settings}>
        {testimonials.map((t, index) => (
          <div key={index}>
            <div className="testimonial">
              <p>"{t.message}"</p>
              <h4>- {t.name}</h4>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
