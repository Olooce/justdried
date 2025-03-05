import React from "react";
import "../styles/Testimonials.css"; // Ensure this CSS file exists

const testimonials = [
  { 
    id: 1, 
    text: "This is the best product I've ever used!", 
    author: "Jane", 
    avatar: "https://i.pravatar.cc/100?img=10"
  },
  { 
    id: 2, 
    text: "Amazing quality and fast shipping!", 
    author: "Mary", 
    avatar: "https://i.pravatar.cc/100?img=20"
  },
  { 
    id: 3, 
    text: "Customer service is top-notch!", 
    author: "Lorna", 
    avatar: "https://i.pravatar.cc/100?img=30"
  },
  { 
    id: 4, 
    text: "Highly recommend to everyone!", 
    author: "Peter", 
    avatar: "https://i.pravatar.cc/100?img=40"
  },
  { 
    id: 5, 
    text: "Absolutely love this brand!", 
    author: "Sophia", 
    avatar: "https://i.pravatar.cc/100?img=50"
  },
];

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <h2 className="testimonials-title">What do customers say?</h2>
      <div className="testimonials-scroll">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial">
            <img src={testimonial.avatar} alt={testimonial.author} className="avatar" />
            <p>"{testimonial.text}"</p>
            <h4>- {testimonial.author}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
