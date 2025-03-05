import React from 'react';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import Categories from '../components/Categories';
import Testimonials from '../components/Testimonials';
import CTASection from '../components/CTASection';
import '../styles/Home.css'; // Ensure styles are applied

const Home = () => {
  return (
    <div className="main-content">
      <Hero />
      
      <section className="featured-products">
        <FeaturedProducts />
      </section>

      {/* Added spacing between sections */}
      <div className="section-spacing"></div>

      <section className="categories">
        <Categories />
      </section>

      <Testimonials />
      <CTASection />
    </div>
  );
};

export default Home;
