import React from 'react';
import '../styles/FeaturedProducts.css'; // Import styles

// Import images from assets
import peanuts from '../assets/peanutsjpg.jpg';
import cashews from '../assets/cashews.jpg';
import chickpeas from '../assets/chickpeas.jpg';
import driedMango from '../assets/dried-mango.jpg';
import driedPineapple from '../assets/dried-pineapple.jpg';
import moringa from '../assets/moringa.jpg';
import driedOmena from '../assets/dried-omena.jpg';

const featuredProducts = [
  {
    id: 1,
    name: 'Roasted Peanuts (Groundnuts)',
    price: 'Ksh 250/500g',
    image: peanuts,
    description: 'Rich in protein and healthy fats, great for heart health.',
  },
  {
    id: 2,
    name: 'Cashew Nuts',
    price: 'Ksh 800/kg',
    image: cashews,
    description: 'Good for brain function, packed with antioxidants.',
  },
  {
    id: 3,
    name: 'Chickpeas',
    price: 'Ksh 400/kg',
    image: chickpeas,
    description: 'High in fiber and protein, great for digestion.',
  },
  {
    id: 4,
    name: 'Dried Mango Slices',
    price: 'Ksh 600/kg',
    image: driedMango,
    description: 'Sweet and chewy, rich in Vitamin A for good eyesight.',
  },
  {
    id: 5,
    name: 'Dried Pineapple Chunks',
    price: 'Ksh 700/kg',
    image: driedPineapple,
    description: 'Boosts digestion and supports immunity.',
  },
  {
    id: 6,
    name: 'Moringa Powder',
    price: 'Ksh 350/250g',
    image: moringa,
    description: 'A superfood rich in vitamins and antioxidants.',
  },
  {
    id: 7,
    name: 'Dried Omena',
    price: 'Ksh 300/500g',
    image: driedOmena,
    description: 'High in Omega-3, essential for brain health.',
  },
];

const FeaturedProducts = () => {
  return (
    <section className="featured-products">
      <h2>Featured Products</h2>
      <div className="products-grid">
        {featuredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p className="product-price">{product.price}</p>
            <p className="product-description">{product.description}</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
