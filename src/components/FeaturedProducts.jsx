import React from 'react';
import '../styles/FeaturedProducts.css';

// Import images from assets
import peanuts from '../assets/peanutsjpg.jpg';
import cashews from '../assets/cashews.jpg';
import chickpeas from '../assets/chickpeas.jpg';
import driedMango from '../assets/dried-mango.jpg';
import driedPineapple from '../assets/dried-pineapple.jpg';
import moringa from '../assets/moringa.jpg';
import driedOmena from '../assets/dried-omena.jpg';

const featuredProducts = [
  { id: 1, name: 'Roasted Peanuts', image: peanuts },
  { id: 2, name: 'Cashew Nuts', image: cashews },
  { id: 3, name: 'Chickpeas', image: chickpeas },
  { id: 4, name: 'Dried Mango Slices', image: driedMango },
  { id: 5, name: 'Dried Pineapple Chunks', image: driedPineapple },
  { id: 6, name: 'Moringa Powder', image: moringa },
  { id: 7, name: 'Dried Omena', image: driedOmena },
];

const FeaturedProducts = () => {
  return (
    <section className="featured-products">
      <h2>Featured Products</h2>
      <div className="products-wrapper">
        <div className="products-scroll">
          {/* Duplicate the product list to create a seamless loop */}
          {[...featuredProducts, ...featuredProducts].map((product, index) => (
            <div key={index} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <h3>{product.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
