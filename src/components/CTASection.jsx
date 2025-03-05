import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/CTASection.css';

const CTASection = () => {
  return (
    <div className="cta-section">
      <h2>Join Our Community!</h2>
      <p>Sign up for exclusive discounts, updates, and healthy tips.</p>
      <Link to="/shop" className="cta-button">Shop Now</Link>
    </div>
  );
};

export default CTASection;
