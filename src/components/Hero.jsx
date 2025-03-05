import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Discover the Best Organic Dried Fruits & Snacks</h1>
        <p>Pure, natural, and healthy. Sourced directly from farms to your table.</p>
        <div className="hero-buttons">
          <Link to="/shop" className="cta-button">Shop Now</Link>
          <Link to="/about" className="cta-secondary">Learn More</Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
