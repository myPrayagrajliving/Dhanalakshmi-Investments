import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";

export default function TestimonialSlider() {
  const testimonials = [
    { name: "John", message: "Excellent service!" },
    { name: "Priya", message: "Very professional and friendly." },
    { name: "Ali", message: "Highly recommend them!" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
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
